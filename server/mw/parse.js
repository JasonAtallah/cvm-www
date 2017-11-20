const bodyParser = require('body-parser');

module.exports = {
  form: bodyParser.urlencoded({ extended: false }),
  json: bodyParser.json()
};
