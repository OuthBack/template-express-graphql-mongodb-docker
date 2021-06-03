const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const AuthenticationType = new GraphQLObjectType({
  name: "Authentication",
  description: "Handle the authentication",
  fields: () => ({
    admLogin: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      description: "Login as Administrator",
      resolve: (controller, args) => controller.AdmLogin(args),
    },
  }),
});

const Authentication = {
  type: AuthenticationType,
  description: "Handle the authentication",
  resolve: () => require("../controller/authentication.controller"),
};

module.exports = Authentication;
