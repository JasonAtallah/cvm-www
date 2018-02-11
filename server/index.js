'use strict';

const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config');

dotenv.config();
config.load();

var _resolve;
var _reject;
const readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve;
  _reject = reject;
});

const app = express();

app.use(morgan('combined'));
app.use(session({
  cookie: {
    // secure: true,
    // sameSite: 'strict',
    // httpOnly: true
  },
  name: 'cvm-www.sid',
  resave: true,
  saveUninitialized: true,
  secret: 'shhhhhhhhh',
  store: new MongoDBStore({
    uri: config.mongo.uri,
    collection: 'sessions'
  })
}));

require(`./apps/${config.app.name}`)(app);

var server = app.listen(config.app.port, function () {
  console.log(`App is running ${config.app.name} app on port ${config.app.port}`);
  _resolve();
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
