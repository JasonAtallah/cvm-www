const express = require('express');
const config = require('../../config');

module.exports = function(app) {
  const router = express.Router();

  app.use(config.staticPath, express.static(config.staticDir));

  router.get('/', function(req, res, next) {
    res.sendFile(config.index);
  });

  app.use('/', router);

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
