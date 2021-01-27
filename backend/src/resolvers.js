import ApolloServer from "apollo-server";
import dotenv from "dotenv";
import graphql from "graphql";

import { createToken } from "./utils/auth.js";
import { convertFileToBuffer, processUpload } from "./utils/manupulate-file.js";

const { AuthenticationError, UserInputError, ForbiddenError } = ApolloServer;
const { GraphQLScalarType, Kind } = graphql;

dotenv.config(); // require and configure dotenv

export const resolvers = {
  Query: {
    user: async (_, __, { dataSources: { users }, userId }) => {
      if (!userId)
        return new AuthenticationError("User is currently logged out");

      return await users.getUser({ _id: userId.userId });
    },

    userInfo: async (_, __, { dataSources: { users }, userId }) => {
      if (!userId)
        return new AuthenticationError("User is currently logged out");

      return await users.getUserWithPwd({ _id: userId.userId });
    },

    recentArticles: async (_, __, { dataSources: { articles } }) => {
      return await articles.sortArticlesByDateDesc({ status: "APPROVED" });
    },

    getAllArticles: async (_, __, { dataSources: { articles } }) => {
      return await articles.getArticles({});
    },

    getUsersWithArticles: async (
      _,
      __,
      { dataSources: { articles, users }, userId }
    ) => {
      let usersArticlesArr = [];

      const savedArticles = await articles.getArticles({ status: "PENDING" });

      if (savedArticles.length > 0) {
        for (const article of savedArticles) {
          const user = await users.getUser({ _id: article.userId });
          usersArticlesArr.push({ article, user });
        }

        return usersArticlesArr;
      }

      return [];
    },

    getArticlesByUser: async (
      _,
      __,
      { dataSources: { articles, users }, userId }
    ) => {
      if (!userId) {
        return new ForbiddenError("Can't read user articles");
      }

      const activeUser = await users.getUser({ _id: userId.userId });

      if (activeUser.userType != "ADMIN")
        return await articles.getArticles({
          userId: userId.userId,
          status: "APPROVED",
        });

      return await articles.getArticles({ status: "APPROVED" });
    },

    getArticle: async (_, { articleId }, { dataSources: { articles } }) => {
      return await articles.getArticle({ _id: articleId });
    },

    loginUser: async (_, { email, password }, { dataSources: { users } }) => {
      let user;
      try {
        user = await users.getUserWithPwd({ email });

        if (!user)
          throw new UserInputError("No user found with this credentials");

        // check if password is correct
        const isMatchPassword = await user.isValidPassword(password);

        // if not, handle it
        if (!isMatchPassword)
          throw new UserInputError("No user found with this credentials");
      } catch (error) {
        console.log(`${error}`);
        return new AuthenticationError(error);
      }

      // creating signed access token for current logged in user
      const accessToken = await createToken(
        { userId: user._id },
        process.env.ACCESS_TOKEN,
        "12h"
      );

      return { token: accessToken };
    },

    // check login status
    isUserLoggedIn: (_, __, { userId }) => {
      if (!userId) {
        return {
          loggedIn: false,
        };
      }

      return {
        loggedIn: true,
      };
    },
  },

  // mutations goes here
  Mutation: {
    registerUser: async (_, { userInput }, { dataSources: { users } }) => {
      const { email, password } = userInput;

      let isUserExist = await users.getUser({
        email,
      });

      if (isUserExist !== null)
        return new ForbiddenError("Account already exist");

      try {
        const createdUser = await users.addUser({
          email,
          password,
        });

        // creating signed access token for current logged in user
        const accessToken = await createToken(
          { userId: createdUser._id },
          process.env.ACCESS_TOKEN,
          "12h"
        );

        return { token: accessToken };
      } catch (error) {
        console.log(error);
        return new AuthenticationError("Account registration not successful");
      }
    },

    forgotUserPwd: async (_, { email }, { dataSources: { users } }) => {
      try {
        user = await users.getUser(email);

        if (!user)
          throw new UserInputError("No user found with this credentials");

        // TODO: implement forget password
      } catch (error) {
        return {
          code: 403,
          message: `${error}`,
        };
      }
    },

    deleteUser: async (_, { id }, { dataSources: { users } }) => {
      try {
        let user = await users.getUser({ _id: id });

        if (!user)
          throw new UserInputError("No user found with this credentials");

        await users.removeUser({ _id: id });
      } catch (error) {
        return {
          code: 403,
          message: `${error}`,
        };
      }

      return {
        code: 200,
        message: `Successfully removed user.`,
      };
    },

    updateUserInfo: async (
      _,
      { userInput },
      { dataSources: { users }, userId }
    ) => {
      if (!userId)
        return new AuthenticationError("User is currently logged out");

      try {
        await users.updateUser(userId.userId, userInput);
      } catch (error) {
        return {
          code: 403,
          message: `${error}`,
        };
      }

      return {
        code: 200,
        message: "Successfully updated user info",
      };
    },

    postArticle: async (
      _,
      { articleInput },
      { dataSources: { articles, users }, userId }
    ) => {
      if (!userId) return new ForbiddenError("User is currently logged out.");

      const activeUser = await users.getUser({ _id: userId.userId });

      if (activeUser.userType != "ADMIN")
        return new ForbiddenError("User can't perform such operation.");

      console.log(articleInput);
      let imageBuffer;
      
      if (articleInput.imageFile) {
        const processedFile = await processUpload(articleInput.imageFile);

        console.log(processedFile);
        const imageBuffer = convertFileToBuffer(
          processedFile.filePath,
          processedFile.mimetype
        );
      }

      try {
        await articles.addNewArticle({
          category: articleInput.category,
          imageSrc: imageBuffer,
          title: articleInput.title,
          userId: userId.userId,
          details: articleInput.details,
        });
      } catch (error) {
        console.log(error);
        return { code: 403, message: `${error}` };
      }

      return { code: 200, message: "Successfully posted an article." };
    },

    updateArticleDetails: async (
      _,
      { articleId, articleInput },
      { dataSources: { articles }, userId }
    ) => {
      if (!userId) return new ForbiddenError("User is currently logged out.");

      try {
        await articles.updateArticle(articleId, articleInput);
      } catch (error) {
        return { code: 403, message: `${error}` };
      }

      return { code: 200, message: "Successfully updated an article." };
    },

    changeArticleStatus: async (
      _,
      { articleId, status },
      { dataSources: { articles, users, notifications }, userId }
    ) => {
      if (!userId) return new ForbiddenError("User is currently logged out.");

      const activeUser = await users.getUser({ _id: userId.userId });

      if (activeUser.userType != "ADMIN")
        return new ForbiddenError("User can't perform such operation");

      try {
        const updatedArticle = await articles.updateArticle(articleId, {
          status,
        });

        let nType = "Article Approval";
        let nMessage = "Your article has been approved";

        if (status == "DISAPPROVED") {
          nType = "Article Disapproved";
          nMessage = "Your article has been rejected";
        }

        await notifications.addNotification({
          to: updatedArticle.userId,
          from: "ADMIN",
          type: nType,
          message: nMessage,
        });
      } catch (error) {
        return { code: 403, message: `${error}` };
      }

      return { code: 200, message: "Successfully updated an article." };
    },

    deleteArticle: async (
      _,
      { articleId },
      { dataSources: { articles }, userId }
    ) => {
      if (!userId.userId)
        return new ForbiddenError("User is currently logged out.");

      try {
        await articles.removeArticle({ _id: articleId });
      } catch (error) {
        return {
          code: 403,
          message: `${error}`,
        };
      }

      return {
        code: 200,
        message: `Successfully removed article.`,
      };
    },
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // ast value is always string
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),
};
