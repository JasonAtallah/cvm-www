const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const config = require('../../config');

module.exports = function(app) {

  app.get('/session', function(req, res) {
    res.send({
      auth: {
        accessToken: req.user.auth.accessToken,
        idToken: req.user.auth.idToken,
        expiresIn: req.user.auth.expiresIn,
        domain: config.mgmtApi.domain,
        clientId: config.mgmtApi.clientId,
        redirectUri: config.mgmtApi.callbackUrl,
        audience: config.mgmtApi.audience,
        scope: config.mgmtApi.scope
      },
      mgmtApi: {
        rootUrl: config.mgmtApi.rootUrl
      }
    })
  });

  if (process.env.NODE_ENV === 'production') {
    app.get('/', ensureLoggedIn, function(req, res, next) {
      res.sendFile(config.index);
    });
  } else {
    require('./devServer')(app);
  }

  app.use(config.staticPath, express.static(config.staticDir));

  app.use(function(req, res, next) {
    const err = new Error('Not Found');
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
