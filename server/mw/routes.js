const express = require('express');
const path = require('path');
const config = require('../../config');
const auth = require('./auth');
const parse = require('./parse');
const proxy = require('./proxy');

module.exports = function (app) {
  app.get('/favicon.ico', express.static(path.resolve(config.staticDir, 'img')));

  app.use(config.staticPath,
    auth.isLoggedIn,
    express.static(config.staticDir));

  if (process.env.NODE_ENV === 'production') {
    app.get('/',
      function (req, res, next) {
        res.sendFile(config.index);
      });
  }

  if (config.app === 'buyer') {
    app.get('/session',
      auth.isLoggedIn,
      auth.sendBuyerSession);

    app.use('/api',
      auth.isLoggedIn,
      proxy.api);
  }

  if (config.app === 'vendor') {
    app.get('/session',
      auth.sendVendorSession);

    app.use('/api',
      proxy.api);
  }

  if (process.env.NODE_ENV === 'development') {
    require('../lib/devServer')(app);
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
