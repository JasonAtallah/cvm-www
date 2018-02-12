'use strict';

const path = require('path');
const _ = require('lodash');

const config = module.exports = {
  load: function () {
    _.extend(config, {
      app: {
        host: process.env.APP_HOST,
        index: path.resolve(__dirname, '../dist/index.html'),
        name: process.env.JS_APP_NAME,
        port: process.env.PORT,
        buyerCallback: `${process.env.APP_HOST}/buyer/callback`,
        vendorAppUrl: process.env.VENDOR_APP_URL
      },
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      build: {
        bundleAnalyzerReport: false,
        index: path.resolve(__dirname, '../dist/index.html'),
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
      },
      entryFilePath: `./src/apps/${process.env.JS_APP_NAME}/start`,
      mgmtApi: {
        host: process.env.MGMT_API_HOST
      },
      mongo: {
        uri: process.env.MONGODB_URI
      }
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
