const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('../../config');

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(function(req, res, next) {
    res.locals.loggedIn = false;
    if (req.session.passport && typeof req.session.passport.user != 'undefined') {
      res.locals.loggedIn = true;
    }
    next();
  });

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  const strategy = new Auth0Strategy(
    {
      domain: config.auth0.domain,
      clientID: config.auth0.clientId,
      clientSecret: config.auth0.clientSecret,
      callbackURL: config.auth0.callbackUrl
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      profile.auth = {
        accessToken: extraParams.access_token,
        idToken: extraParams.id_token,
        expiresIn: extraParams.expires_in
      };

      return done(null, profile);
    }
  );

  passport.use(strategy);

  app.get('/login', passport.authenticate('auth0', {
      clientID: config.auth0.clientId,
      domain: config.auth0.domain,
      redirectUri: config.auth0.callbackUrl,
      responseType: 'code',
      audience: config.auth0.audience,
      scope: 'openid profile'
    }),
    function(req, res) {
      res.redirect("/");
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/failure'
    }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/');
    }
  );

  app.get('/failure', function(req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
      error: error[0],
      error_description: error_description[0],
    });
  });
}
