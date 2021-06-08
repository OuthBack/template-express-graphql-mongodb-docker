const bcrypt = require("bcrypt");
const passport = require("passport");
const { mongoose } = require("../../../helpers/database_connection");
const Models = {
  Users: require("../../model/users.model"),
};

const AdmLogin = async (args) => {
  const { email, password } = args;
  const user = await Models.Users.findOne({ email });

  if (user) {
    const match = await bcrypt.compare(password, user.admPassword);
    if (match) return "Logged with Sucess";
  }
  return "Invalid email or password";
};

// const matchSteamUser = async () => {
//   console.log("To match");
// };

// const registerSteamUser = async () => {
//   console.log("To add");
// };

module.exports = { AdmLogin };
