const express = require('express');
const roomRouter = require('./roomRouter');
const login = require('./loginRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/room', roomRouter);
  router.use('/auth', login);
}

module.exports = routerApi;