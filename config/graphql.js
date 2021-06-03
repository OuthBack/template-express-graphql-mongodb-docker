const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const chalk = require("chalk");
const glob = require("glob");
const path = require("path");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => require("./load_modules"),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
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
