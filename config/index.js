'use strict';

const path = require('path');
const _ = require('lodash');

const config = module.exports = {
  load: function () {
    _.extend(config, {
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      auth0: {
        audience: process.env.AUTH0_AUDIENCE,
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        domain: process.env.AUTH0_DOMAIN,
        scope: process.env.AUTH0_SCOPE
      },
      build: {
        bundleAnalyzerReport: false,
        index: path.resolve(__dirname, '../dist/index.html'),
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
      },
      entryFilePath: `./src/start-${process.env.JS_APP_NAME}`,
      host: process.env.APP_HOST,
      index: path.resolve(__dirname, '../dist/index.html'),
      mgmtApi: {
        host: process.env.MGMT_API_HOST
      },
      mongo: {
        uri: process.env.MONGODB_URI
      },
      port: process.env.PORT
    });

    _.extend(config, {
      staticPath: path.join(config.assetsPublicPath, config.assetsSubDirectory),
      staticDir: path.join(config.assetsRoot, config.assetsSubDirectory)
    });

    switch (process.env.NODE_ENV) {
      case 'production':
      case 'testing':
        _.extend(config, {
          autoOpenBrowser: false,
          bundleAnalyzerReport: false,
          productionSourceMap: true,
          productionGzip: false,
          productionGzipExtensions: ['js', 'css']
        });
        break;

      default:
        _.extend(config, {
          autoOpenBrowser: false,
          cssSourceMap: false,
          proxyTable: {}
        });
    }
  }
};
