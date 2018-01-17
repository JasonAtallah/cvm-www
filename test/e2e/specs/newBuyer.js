const scripts = require('../scripts');
const specParts = require('../spec-parts');
const data = require('../../data');

// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {

  before: function(browser, done) {
    scripts.run('before_newBuyer', done);
  },

  'new buyer walkthrough': function test(browser) {

    specParts.authGoogle(browser);
    specParts.setCalendar(browser);
    specParts.updateProfile(browser);
    specParts.updateEmailTemplate(browser, 'approve');
    specParts.updateEmailTemplate(browser, 'reject');
    specParts.addVendor(browser, data.vendors[0]);
    specParts.addVendor(browser, data.vendors[1]);
    specParts.addVendor(browser, data.vendors[2]);

    browser
      .pause(5000)
      .end();
  },
};
