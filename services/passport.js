const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new LocalStrategy(
    async function(username, password, done) {
        await User.findOne({
          username: username
        }, function(err, user) {
          if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
          }
  
          if (!user.validatePassword(password)) {
            return done(null, false, { message: 'Incorrect password'});
          }
          const user = await new User ()
          return done(null, user);
        });
    }
));


