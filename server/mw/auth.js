const request = require('request-promise-native');
const config = require('../../config');

module.exports = new class AuthMiddleware {

  convertCodeToToken(req, res, next) {
    const options = {
      method: 'GET',
      url: `${config.mgmtApi.host}/api/buyer/token`,
      qs: {
        code: req.query.code
      }
    };

    request(options)
      .then((token) => {
        req.session.token = token;
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  isBuyerLoggedIn(req, res, next) {
    if (req.session && req.session.token) {
      next();
    } else {
      res.redirect(`${config.mgmtApi.host}/buyer/login?callback=${config.app.buyerCallback}`);
    }
  }
};
