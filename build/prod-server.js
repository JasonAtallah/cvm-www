'use strict'

const path = require('path');
const config = require('../config');
const express = require('express');
const app = express();
const port = process.env.PORT || config.build.port;
const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
const staticDir = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);

app.use(staticPath, express.static(staticDir));
app.get('/', function(req, res) {
  res.sendFile(config.build.index);
});

var server = app.listen(port, function() {
  console.log('App is running');
});
