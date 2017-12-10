

module.exports = new class ResponsesMiddleware {

  redirectToHomePage(req, res) {
    res.redirect('/');
  }
}
