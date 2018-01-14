'use strict'
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ?
      config.productionSourceMap :
      config.cssSourceMap,
    extract: isProduction
  }),
  cssSourceMap: config.cssSourceMap,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
