const proxy = require('http-proxy-middleware');
const config = require('../../config');

module.exports = {
  api: proxy({
    logLevel: 'debug',
    target: config.mgmtApi.host,
    changeOrigin: true,
    onProxyReq(proxyReq, req, res) {
      if (req.session.token) {
        proxyReq.setHeader('Authorization', `Bearer ${req.session.token}`);
      }
    },
    onError(err, req, res) {
      res.status(500).send(err.toString());
    }
  })
};
