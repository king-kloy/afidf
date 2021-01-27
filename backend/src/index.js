import pkg from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotnet from "dotenv";

import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

import { Article } from "./models/Article.js";
import { User } from "./models/User.js";

import ArticleAPI from "./datasources/article.js";
import UserAPI from "./datasources/user.js";

const { ApolloServer, AuthenticationError } = pkg;

dotnet.config();

mongoose.set("useFindAndModify", false);

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27018/afidf-database";

const startServer = async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const app = express();

  app.use(cors());

  app.use(cookieParser());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    /*  engine: {
      apiKey: process.env.APOLLO_KEY,
      reportSchema: true,
      variant: "current",
    }, */
    dataSources: () => ({
      articles: new ArticleAPI(Article),
      users: new UserAPI(User),
    }),
    context: async ({ req }) => {
      try {
        const authorization = req.headers.authorization;
        if (!authorization) return undefined;

        const token = authorization.split(" ")[1];

        let user;
        try {
          user = jwt.verify(token, process.env.ACCESS_TOKEN);
        } catch (error) {
          // token expire error handling
          return undefined;
        }
        return user;
      } catch (error) {
        console.log(`😭 ${error}`);
        throw new AuthenticationError(error);
      }
    },
  });

  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT || 4000 }, (url) => {
    console.log(`🚀 4000${server.graphqlPath}`);
  });
};

startServer();
