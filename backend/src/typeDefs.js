import graphql from "apollo-server-express";

const { gql } = graphql;

export const typeDefs = gql`
  type Query {
    user: User
    userInfo: User
    recentArticles: [Article]
    getAllArticles: [Article]
    getUsersWithArticles: [UsersWithArticles]
    getArticlesByUser: [Article]
    getArticle(articleId: String): Article
    loginUser(userInput: UserInput): Token
    isUserLoggedIn: IsUserLoggedIn
  }

  type Mutation {
    registerUser(userInput: UserInput): Token

    forgotUserPwd(email: String): ResponseStatus

    deleteUser(id: ID): ResponseStatus

    updateUserInfo(userInput: UserInput): ResponseStatus

    postArticle(articleInput: ArticleInput): ResponseStatus

    updateArticleDetails(
      articleId: String
      articleInput: ArticleInput
    ): ResponseStatus

    changeArticleStatus(articleId: String, status: Status): ResponseStatus

    deleteArticle(articleId: String): ResponseStatus
  }

  type UsersWithArticles {
    user: User
    article: Article
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
    contact: String
    userType: UserType
    aboutYou: String
    imageSrc: String
    address: String
    joinedDate: Date
  }

  type Article {
    id: ID
    category: Category
    imageSrc: String
    title: String
    userId: String
    createdDate: Date
    details: String
    status: String
    metaTags: [String]
    metaDescription: Int
  }

  type Token {
    token: String
  }

  type ResponseStatus {
    code: Int
    message: String
  }

  type File {
    filename: String
    mimetype: String
    encoding: String
  }

  type IsUserLoggedIn {
    loggedIn: Boolean
  }

  input ArticleInput {
    category: Category
    imageFile: Upload
    title: String
    details: String
    metaTags: [String]
    metaDescription: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    aboutYou: String
    address: String
    contact: String
    imageSrc: String
    userType: UserType
  }

  scalar Date

  enum Category {
    POLITICS
    BUSINESS
    SPORTS
    ENTERTAINMENT
    LIFESTYLE
    WORLD
    OPINION
    REGIONALS
    LIVESCORES
    EDUCATION
  }

  enum UserType {
    NORMAL
    ADMIN
  }

  enum Status {
    PENDING
    APPROVED
    DISAPPROVED
  }
`;
