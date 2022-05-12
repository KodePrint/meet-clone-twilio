const express = require('express');
const roomRouter = require('./roomRouter');
const login = require('./authRouter');
const user = require('./userRouter');
const profile = require('./profileRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/room', roomRouter);
  router.use('/auth', login);
  router.use('/user', user);
  router.use('/profile', profile);
}

module.exports = routerApi;