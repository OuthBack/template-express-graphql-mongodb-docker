var express = require("express");
var logger = require("morgan");

var app = express();
require("./middleware")(app, logger, express);
require("./database_connection");
require("./graphql")(app);
// require("./steam_login")(app);

module.exports = app;
