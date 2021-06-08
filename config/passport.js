const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;

const user = {};

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new SteamStrategy(
      {
        returnURL: process.env.SITE_URL + "/auth/steam/callback",
        realm: process.env.SITE_URL,
        apiKey: "",
      },
      (identifier, profile, done) => {
        const {} = require("../controller/authentication.controller");
      }
    )
  );
};
