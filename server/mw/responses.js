

module.exports = new class ResponsesMiddleware {

  redirectToHomePage(req, res) {
    res.redirect('/');
  }
  
  sendOk(req, res) {
    res.status(200).send('OK');
  }
}
