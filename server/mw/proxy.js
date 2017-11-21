const proxy = require('http-proxy-middleware');
const config = require('../../config');

module.exports = {
  api: proxy({
    logLevel: 'debug',
    target: config.mgmtApi.host,
    changeOrigin: true,
    onProxyReq(proxyReq, req, res) {
      if (req.user) {
        proxyReq.setHeader('Authorization', `Bearer ${req.user.auth.accessToken}`);
      }

      proxyReq.setHeader('Origin', config.host);
    },
    onError(err, req, res) {
      res.status(500).send(err.toString());
    }
  })
};
