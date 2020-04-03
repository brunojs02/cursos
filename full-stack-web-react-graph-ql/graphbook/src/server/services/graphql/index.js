import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import Schema from "./schema";
import Resolvers from "./resolvers";

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

const server = new ApolloServer({
  schema: executableSchema,
  context: ({ req }) => req
});

export default server;
