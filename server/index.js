'use strict'

const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');
const dotenv = require('dotenv');

const config = require('../config');
const routes = require('./mw/routes');
const auth = require('./mw/auth');

dotenv.load();
config.load();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

auth(app);
routes(app);

var server = app.listen(config.port, function() {
  console.log(`App is running on port ${config.port}`);
});
