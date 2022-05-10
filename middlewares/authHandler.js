const boom = require('@hapi/boom')
const { globalconfigs } = require('../config/global.config')

function checkApiKey(req, res, next) {
  const apiKey = globalconfigs.apiKey
  if (!apiKey) {
    return next(boom.forbidden(
      'Prohibited, you must login as administrator to get a valid token..!')
      )
  }
  if (apiKey === globalconfigs.apiKey) {
    next()
  } else {
    next(boom.unauthorized(
      'unauthorized, the provided token is not correct..!'
    ))
  }
}

module.exports = {checkApiKey}