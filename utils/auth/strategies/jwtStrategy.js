const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom')
const JwtStrategy = require('passport-jwt/lib/strategy');

const { globalconfigs } = require('../../../config/global.config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: globalconfigs.secretJWT
};

const JwtStrtategy = new Strategy(options, (payload, done) => {

  return done(null, payload);
});

module.exports = JwtStrtategy;

