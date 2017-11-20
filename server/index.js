'use strict';

const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config');

dotenv.config();
config.load();

const app = express();

app.use(cookieParser());
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

require('./mw/oauth')(app);
require('./mw/routes')(app);

var server = app.listen(config.port, function () {
  console.log(`App is running on port ${config.port}`);
});
