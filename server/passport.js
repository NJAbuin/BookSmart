const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../db/models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(username, password, done) {
      User.findOne({
        where: { email: username }
      })
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validatePassword(password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(console.error);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "423643715217834",
      clientSecret: "062bd9fefd2ed02398089d9e633d5203",
      callbackURL: "http://localhost:3000/api/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOrCreate(
        {
          where: {
            name: profile.displayName,
            email: profile.emails[0],
            password: Math.random()
              .toString(36)
              .substring(7)
          }
        },
        function(err, user) {
          if (err) {
            return done(err);
          }
          done(null, user);
        }
      );
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});
module.exports = passport;
