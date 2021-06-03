const bcrypt = require("bcrypt");
const { mongoose } = require("../../helpers/database_connection");
const Models = {
  Users: require("../model/users.model"),
};

const Register = async (agrs) => {
  const { email } = agrs;
  if (email == null) {
    res.json({ message: "Emphty Email" });
    return;
  }
  new Models.Users({ email });
  res.json({ message: `Email: ${email} resgistred with success` });
};

const AdmLogin = async (args) => {
  const { email, password } = args;
  const user = await Models.Users.findOne({ email });
  console.log(user);
  if (user) {
    const match = await bcrypt.compare(password, user.admPassword);
    if (match) return "Logged with Sucess";
  }
  return "Invalid email or password";
};

module.exports = { Register, AdmLogin };
