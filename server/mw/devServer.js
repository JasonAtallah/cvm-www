'use strict'

require('../../build/check-versions')();

const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

const config = require('../../config')
const webpackConfig = require('../../build/webpack.dev.conf');

module.exports = function(app) {
  const port = config.port;
  const autoOpenBrowser = config.autoOpenBrowser;
  const proxyTable = config.proxyTable;
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
  });

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
  });

  app.use(hotMiddleware)
  app.use(require('connect-history-api-fallback')())
  app.use(ensureLoggedIn, devMiddleware)

  devMiddleware.waitUntilValid(() => {
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn('http://localhost:' + port)
    }
  });
}
