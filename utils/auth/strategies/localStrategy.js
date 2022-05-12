const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')
const UserServices = require('../../../services/userServices');

const service = new UserServices()
const options = {
  usernameField: 'email',
  passwordField: 'password'
}

// Estrategia Local
const LocalStrategy = new Strategy(
  // Opsiones
  options,
  async (email, password, done) => {
    try {
      // Se obtiene el usuario
      const user = await service.getByEmail(email);
      if (!user) {
        // Si no existe el usuario se envia el error por boom
        done(boom.unauthorized('no se encontro'), false)
      }
      if (!user.dataValues.is_active) {
        done(boom.forbidden('Esta desactivado'), false);
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        done(boom.unauthorized('no coniciden contraseña'), false)
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;