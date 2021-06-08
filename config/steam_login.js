const passport = require("passport");
const url = process.env.SITE_URL;

module.exports = (app) => {
  app.get("/auth/steam", passport.authenticate("steam"));
  app.get(
    "/auth/steam/callback",
    passport.authenticate("steam", {
      successRedirect: url + "/graphql",
      failureRedirect: url + "/graphql",
    })
  );
};
