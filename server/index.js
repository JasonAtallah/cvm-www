'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

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

auth(app);

app.get('/favicon.ico', express.static(path.resolve(config.staticDir, 'img')));
app.use(ensureLoggedIn);
app.use(config.staticPath, express.static(config.staticDir));

routes(app);

var server = app.listen(config.port, function () {
  console.log(`App is running on port ${config.port}`);
});
