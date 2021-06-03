const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.connect(process.env.DB_URL, {
  // Give the Mongo URL in .env
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, chalk.red("Connection Error:")));
db.once("open", () => console.log(`Connected with ${chalk.green("MongoDB")}`));

module.exports = mongoose;
