const express = require('express');
const path = require('path');
const config = require('../../config');
const auth = require('./auth');
const parse = require('./parse');
const proxy = require('./proxy');
const responses = require('./responses');

module.exports = function (app) {
  app.get('/favicon.ico', express.static(path.resolve(config.staticDir, 'img')));

  if (config.app.name === 'buyer') {

    app.use(config.staticPath,
      auth.isBuyerLoggedIn,
      express.static(config.staticDir));

    app.get('/login',
      function(req, res) {
        res.redirect(`${config.mgmtApi.host}/buyer/login?callback=${config.app.buyerCallback}`);
      }
    );

    app.get('/buyer/callback',
      auth.convertCodeToToken,
      responses.redirectToHomePage);

    app.use('/api',
      auth.isBuyerLoggedIn,
      proxy.api);

    if (process.env.NODE_ENV === 'production') {
      app.get('/',
        auth.isBuyerLoggedIn,
        function (req, res, next) {
          res.sendFile(config.index);
        });
    } else if (process.env.NODE_ENV === 'development') {
      const devMW = require('../lib/devServer')(app);
      app.use(
        auth.isBuyerLoggedIn,
        ...devMW);
    }
  }

  if (config.app.name === 'vendor') {
    app.use(config.staticPath,
      express.static(config.staticDir));

    app.use('/api',
      proxy.api);

    if (process.env.NODE_ENV === 'production') {
      app.get('/',
        function (req, res, next) {
          res.sendFile(config.index);
        });
    } else if (process.env.NODE_ENV === 'development') {
      const devMW = require('../lib/devServer')(app);
      app.use(...devMW);
    }
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
