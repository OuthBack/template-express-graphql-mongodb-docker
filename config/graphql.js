const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const chalk = require("chalk");
const glob = require("glob");
const path = require("path");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => require("./load_query_modules"),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => require("./load_mutation_modules"),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

module.exports = (app) => {
  app.use(
    "/graphql",
    expressGraphQL({
      schema: schema,
      graphiql: true,
    })
  );
  console.log(`Graphql ${chalk.green("running")}`);
};
