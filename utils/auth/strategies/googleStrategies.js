const boom = require('@hapi/boom');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const options = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/v1/auth/google/callback',
}

const googleStrategy = new GoogleStrategy (
  options, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
)

module.export = googleStrategy