'use strict'

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const session = require('express-session');

const config = require('../config');
const routes = require('./mw/routes');
const auth = require('./mw/auth');

dotenv.load();
config.load();

const app = express();

app.use(cors({
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  credentials: true,
  maxAge: 3600,
  origin: function(origin, callback) {
    if (config.cors.whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
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
