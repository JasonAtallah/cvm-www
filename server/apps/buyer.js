const express = require('express');
const path = require('path');
const config = require('../../config');
const mw = require('../mw');

module.exports = function (app) {
  app.get('/favicon.ico', express.static(path.resolve(config.staticDir, 'img')));

  app.use(config.staticPath,
    mw.auth.isBuyerLoggedIn,
    express.static(config.staticDir));

  app.get('/login',
    mw.auth.loginBuyer
  );

  app.get('/settings',
    function(req, res, next) {
      res.status(200).send({
        vendorAppUrl: config.app.vendorAppUrl
      });
    }
  );

  app.get('/buyer/callback',
    mw.auth.convertCodeToToken,
    mw.responses.redirectToHomePage);

  app.use('/buyer',
    mw.auth.isBuyerLoggedIn,
    mw.proxy.api);

  if (process.env.NODE_ENV === 'development') {
    const devMW = require('../lib/devServer')(app);
    app.use(
      mw.auth.isBuyerLoggedIn,
      ...devMW);
  } else {
    app.get('/',
      mw.auth.isBuyerLoggedIn,
      (req, res, next) => {
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
