const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const AuthenticationType = new GraphQLObjectType({
  name: "QueryAuthentication",
  description: "Get the authentication",
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
    // registerSteamUser: {
    //   type: GraphQLString,
    //   description: "Register Steam User",
    //   resolve: (controller) => controller.registerSteamUser(),
    // },
  }),
});

const Authentication = {
  type: AuthenticationType,
  description: "Handle the authentication",
  resolve: () => require("../../controller/queries/authentication.controller"),
};

module.exports = Authentication;
