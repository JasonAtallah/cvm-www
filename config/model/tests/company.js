const _ = require('lodash');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const config = require('../../../config');
const company = require('./company.json');

dotenv.config();
config.load();

MongoClient.connect(config.mongo.uri, function (err, db) {
  if (err !== null) {
    console.log('Mongo connection failure');
  } else {
    console.log(company.name);
    db.collection('vendors').findOne({ "company.name": company.name })
      .then((vendor) => {
        assert(_.isEqual(vendor.company, company));
      })
      .catch((err) => {
        console.dir(err);
      });
  }
});