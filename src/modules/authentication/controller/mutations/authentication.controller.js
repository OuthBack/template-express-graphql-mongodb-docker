const bcrypt = require("bcrypt");
const passport = require("passport");
const { mongoose } = require("../../../helpers/database_connection");
const Models = {
  Users: require("../../model/users.model"),
};
const loginGateways = ["googleLogin"];

const Register = async (agrs) => {
  const { email, otherInfo } = agrs;
  if (email == null) return "Emphty Email";
  if (!loginGateways.includes(otherInfo.gateway))
    return "The Gateway dosen't exist";

  const user = await Models.Users.findOne({ email });

  const registerUser = () => {
    new Models.Users({ email, [otherInfo.gateway]: otherInfo }).save();
    return `Email: ${email} resgistred with success`;
  };
  return !user ? registerUser(user) : "This email already exists";
};

// const matchSteamUser = async () => {
//   console.log("To match");
// };

// const registerSteamUser = async () => {
//   console.log("To add");
// };

module.exports = { Register };
