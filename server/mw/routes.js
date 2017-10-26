const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const config = require('../../config');
const Api = require('./api');

module.exports = function(app) {

  const api = new Api(config.mgmtApi.rootUrl, config.host);

  app.use(ensureLoggedIn);

  app.get('/session', function(req, res) {
    res.send({
      profile: {
        givenName: req.user.given_name,
        familyName: req.user.family_name,
        imageUrl: req.user.picture
      }
    })
  });

  app.get('/vendors', api.get('/vendors'));
  app.get('/events', api.get('/events'));

  if (process.env.NODE_ENV === 'production') {
    app.get('/', function(req, res, next) {
      res.sendFile(config.index);
    });
  } else {
    require('./devServer')(app);
  }

  app.use(config.staticPath, express.static(config.staticDir));

  app.use(function(req, res, next) {
    const err = new Error(`Not Found ${req.originalUrl}`);
    err.status = 404;
    next(err);
  });

  app.use(function(req, res, next) {
    if (req && req.query && req.query.error) {
      req.flash("error", req.query.error);
    }
    if (req && req.query && req.query.error_description) {
      req.flash("error_description", req.query.error_description);
    }
    next();
  });
}
