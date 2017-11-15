const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const config = require('../../config');
const Api = require('./_api');

module.exports = function (app) {
  const api = new Api(config.mgmtApi.rootUrl, config.host);

  app.use(ensureLoggedIn);

  app.get('/data/buyer', api.get('/buyer'));
  app.put('/data/buyer/gCalendar', api.put('/buyer/gcalendar'));
  app.get('/data/calendars', api.get('/calendars'));
  app.post('/data/calendars', api.post('/calendars'));
  app.get('/data/events', api.get('/events'));
  app.get('/data/session', function (req, res) {
    res.send({
      profile: {
        givenName: req.user.name.givenName,
        familyName: req.user.name.familyName,
        imageUrl: req.user.picture
      }
    });
  });
  app.get('/data/vendors', api.get('/vendors'));
  app.post('/data/vendors', api.post('/vendors'));
  app.put('/data/vendors/:vendorId/approve', api.put(function (req) {
    return `/vendors/${req.params.vendorId}/approve`;
  }));
  app.put('/data/vendors/:vendorId/reject', api.put(function (req) {
    return `/vendors/${req.params.vendorId}/reject`;
  }));

  if (process.env.NODE_ENV === 'production') {
    app.get('/', function (req, res, next) {
      res.sendFile(config.index);
    });
  } else {
    require('./devServer')(app);
  }

  app.use(config.staticPath, express.static(config.staticDir));

  app.use(function (req, res, next) {
    const err = new Error(`Not Found ${req.originalUrl}`);
    err.status = 404;
    next(err);
  });

  app.use(function (req, res, next) {
    if (req && req.query && req.query.error) {
      req.flash('error', req.query.error);
    }
    if (req && req.query && req.query.error_description) {
      req.flash('error_description', req.query.error_description);
    }
    next();
  });
};
