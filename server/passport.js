const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/models/User')

passport.use(
    new LocalStrategy({
        usernameField: 'email',
      },function(username, password, done) {
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
    })
   );
   passport.serializeUser(function(user, done) {
    done(null, user.id);
   });
   passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(user => done(null, user));
   });
   module.exports = passport;