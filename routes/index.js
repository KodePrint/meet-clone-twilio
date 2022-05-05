const express = require('express');
const roomRouter = require('./roomRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/room', roomRouter);
}

module.exports = routerApi;