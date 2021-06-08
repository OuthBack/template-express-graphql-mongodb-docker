const { mongoose } = require("../../helpers/database_connection");

const usersSchema = new mongoose.Schema({
  email: String,
  token: String,
  isAdm: Boolean,
  admPassword: String,
  googleLogin: {
    googleId: String,
    givenName: String,
    imageUrl: String,
    name: String,
  },
});

module.exports = mongoose.model("Users", usersSchema);
