const proxy = require('http-proxy-middleware');
const config = require('../../config');

module.exports = function (app) {
  app.get('/session', function (req, res) {
    res.send({
      profile: {
        givenName: req.user.name.givenName,
        familyName: req.user.name.familyName,
        imageUrl: req.user.picture
      }
    });
  });

  app.use('/data', proxy({
    logLevel: 'debug',
    target: config.mgmtApi.host,
    changeOrigin: true,
    pathRewrite: {
      '^/data': '/api'
    },
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader('Authorization', `Bearer ${req.user.auth.accessToken}`);
      proxyReq.setHeader('Origin', config.host);
      proxyReq.setHeader('Connection', 'keep-alive');

      if (req.body) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
    onError(err, req, res) {
      res.status(500).send(err.toString());
    }
  }));

  if (process.env.NODE_ENV === 'production') {
    app.get('/', function (req, res, next) {
      res.sendFile(config.index);
    });
  } else {
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
