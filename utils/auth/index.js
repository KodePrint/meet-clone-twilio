const passport = require('passport')
const { globalconfigs } = require('../../config/global.config')
const LocalStrategy = require('./strategies/localStrategy')
const JwtStategy = require('./strategies/jwtStrategy')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  user.findById(id, (err, user) => {
    done(err, user);
  });
})

passport.use(
  new GoogleStrategy ({
    clientID: globalconfigs.googleClientID,
    clientSecret: globalconfigs.googleSecret,
    callbackURL: "http://localhost:5000/api/v1/auth/google/callback",
  }, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  })
)

passport.use(
  new GitHubStrategy({
    clientID: globalconfigs.githubClientID,
    clientSecret: globalconfigs.githubSecret,
    callbackURL: "http://localhost:5000/api/v1/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  })
)

passport.use(LocalStrategy)

passport.use(JwtStategy)

// passport.use('auth-google', googleStrategy);

