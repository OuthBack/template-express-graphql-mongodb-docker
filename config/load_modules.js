const glob = require("glob");
const path = require("path");
const chalk = require("chalk");

console.log("Graphs are", chalk.yellow("loading ..."));
let modulePath = "src/modules/**/graphs/*.graph.js";
const modules = {};
glob.sync(modulePath).forEach((file) => {
  const filePath = file.split("/");
  const graph = `${filePath[2]}`;
  modules[graph] = require(`../${file}`);
  console.log(`${chalk.red("----")} ${file} ${chalk.green("is loaded")}`);
  console.log(`${chalk.yellow(graph)} is ${chalk.green("ready")} \n`);
});

console.log("Graphs are", chalk.green("loaded"));

module.exports = modules;
