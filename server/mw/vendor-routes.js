const express = require('express');
const path = require('path');
const config = require('../../config');
const auth = require('./auth');
const parse = require('./parse');
const proxy = require('./proxy');
const responses = require('./responses');

module.exports = function (app) {
  app.get('/favicon.ico', express.static(path.resolve(config.staticDir, 'img')));

  app.use(config.staticPath,
    express.static(config.staticDir));

  app.use('/vendor',
    proxy.api);

  if (process.env.NODE_ENV === 'development') {
    const devMW = require('../lib/devServer')(app);
    app.use(...devMW);
  } else {
    app.get('/', (req, res, next) => {
      res.sendFile(config.index);
    });
  }

  app.use(function (req, res, next) {
    const err = new Error(`Not Found ${req.originalUrl}`);
    err.status = 404;
    next(err);
  });

  app.use(function (err, req, res, next) {
    res.status(500).send(err.message);
  });
};
