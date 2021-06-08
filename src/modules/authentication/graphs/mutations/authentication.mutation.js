const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const GoogleLoginType = new GraphQLInputObjectType({
  name: "GoogleLogin",
  fields: () => ({
    givenName: { type: GraphQLString },
    googleId: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const OtherInfoType = new GraphQLInputObjectType({
  name: "OtherInfo",
  fields: () => ({
    gateway: { type: GraphQLString },
    googleLogin: {
      type: GoogleLoginType,
    },
  }),
});

const AuthenticationType = new GraphQLObjectType({
  name: "MutationAuthentication",
  description: "Insert the authentication",
  fields: () => ({
    register: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        otherInfo: {
          type: OtherInfoType,
        },
      },
      description: "Login as Administrator",
      resolve: (controller, args) => controller.Register(args),
    },
  }),
});

const Authentication = {
  type: AuthenticationType,
  description: "Handle the authentication",
  resolve: () =>
    require("../../controller/mutations/authentication.controller"),
};

module.exports = Authentication;
