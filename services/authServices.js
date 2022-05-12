const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');

const { globalconfigs } = require('../config/global.config')
const { boomify } = require('@hapi/boom');

class AuthServices {

  async createTokens(user) {
    const payload = {
      sub: user.id,
      email: user.email,
    }
    const token = jwt.sign(payload, globalconfigs.secretJWT, {expiresIn: globalconfigs.expiresIn});
    const refreshToken = jwt.sign(payload, globalconfigs.secretRefreshJWT , {expiresIn: globalconfigs.expiresRefreshJWT});
    return {token, refreshToken}
  }

  async refreshToken(token) {
    if(!token) {
      throw boom.forbidden('Se a desconectado de la sesion, Inicie sesion nuevamente..!')
    }
    const verifyResult = jwt.verify(refreshToken, globalconfigs.secretRefreshJWT);
    if (new Date().getDate() > (verifyResult.exp * 1000)) {
      throw boom.forbidden('Se a desconectado de la sesion, Inicie sesion nuevamente..!')
    }
    const payload = {
      sub: verifyResult.sub,
      email: verifyResult.email,
    }
    const mewToken = jwt.sign(payload, globalconfigs.secretJWT, {expiresIn: globalconfigs.expiresIn});
    return {accessToken: newToken}
  }

}

module.exports = AuthServices;
