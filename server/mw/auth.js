const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

module.exports = {
  isLoggedIn: ensureLoggedIn,

  sendBuyerSession: (req, res) => {
    res.send({
      profile: {
        givenName: req.user.name.givenName,
        familyName: req.user.name.familyName,
        imageUrl: req.user.picture
      }
    });
  }
};
