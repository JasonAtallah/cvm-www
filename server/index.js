'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const config = require('../config');
const routes = require('./mw/routes');
const auth = require('./mw/auth');

dotenv.config();
config.load();

const app = express();
const sessionStore = new MongoDBStore({
  uri: config.mongo.uri,
  collection: 'sessions'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
  store: sessionStore
}));
app.use(flash());

auth(app);
routes(app);

var server = app.listen(config.port, function () {
  console.log(`App is running on port ${config.port}`);
});
