'use strict'

require('../../build/check-versions')();

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');

const config = require('../../config')
const webpackConfig = require('../../build/webpack.dev.conf');

module.exports = function(app) {
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
  });

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
  });

  return [
    hotMiddleware,
    devMiddleware
  ];
}
