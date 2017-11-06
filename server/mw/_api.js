const request = require('request-promise');

module.exports =
  class Api {
    constructor (apiUrl, host) {
      this.apiUrl = apiUrl;
      this.host = host;
    }

    get (path) {
      let url = this.apiUrl;
      let host = this.host;

      return function (req, res) {
        var options = {
          method: 'GET',
          url: `${url}${path}`,
          headers: {
            'cache-control': 'no-cache',
            authorization: `Bearer ${req.user.auth.accessToken}`,
            origin: `${host}`
          }
        };

        request(options)
          .then((result) => {
            res.status(200).type('json').send(result);
          })
          .catch((err) => {
            res.status(500).send(err.toString());
          });
      };
    }

    post (path) {
      let url = this.apiUrl;
      let host = this.host;

      return function (req, res) {
        var options = {
          method: 'POST',
          url: `${url}${path}`,
          json: true,
          headers: {
            'cache-control': 'no-cache',
            authorization: `Bearer ${req.user.auth.accessToken}`,
            origin: `${host}`
          },
          body: req.body
        };

        request(options)
          .then((result) => {
            res.status(200).type('json').send(result);
          })
          .catch((err) => {
            res.status(500).send(err.toString());
          });
      };
    }

    put (path) {
      let url = this.apiUrl;
      let host = this.host;

      return function (req, res) {
        var options = {
          method: 'PUT',
          url: `${url}${path}`,
          json: true,
          headers: {
            'cache-control': 'no-cache',
            authorization: `Bearer ${req.user.auth.accessToken}`,
            origin: `${host}`
          },
          body: req.body
        };

        request(options)
          .then((result) => {
            res.status(200).type('json').send(result);
          })
          .catch((err) => {
            res.status(500).send(err.toString());
          });
      };
    }
};
