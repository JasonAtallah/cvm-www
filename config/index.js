'use strict'

const path = require('path')
const _ = require('lodash');

const config = module.exports = {

  load: function() {

    _.extend(config, {
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      auth0: {
        audience: 'cannabis-vendor-mgmt-api',
        callbackUrl: process.env.AUTH0_CALLBACK_URL,
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        domain: process.env.AUTH0_DOMAIN
      },
      index: path.resolve(__dirname, '../dist/index.html'),
      mgmtApi: {
        audience: process.env.MGMT_API_AUDIENCE,
        callbackUrl: 'http://localhost:8080/callback',
        clientId: process.env.MGMT_API_CLIENT_ID,
        domain: process.env.MGMT_API_DOMAIN,
        scope: 'openid profile vendors'
      },
      port: process.env.PORT
    });

    _.extend(config, {
      staticPath: path.join(config.assetsPublicPath, config.assetsSubDirectory),
      staticDir: path.join(config.assetsRoot, config.assetsSubDirectory)
    });

    switch (process.env.NODE_ENV) {
      case "production":
      case "testing":
        _.extend(config, {
          autoOpenBrowser: false,
          productionSourceMap: true,
          productionGzip: false,
          productionGzipExtensions: ['js', 'css'],
          bundleAnalyzerReport: false
        });

        break;

      default:
        _.extend(config, {
          autoOpenBrowser: true,
          proxyTable: {},
          cssSourceMap: false
        });
    }
  }
}
