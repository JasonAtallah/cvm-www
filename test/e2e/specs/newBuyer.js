const { URL } = require('url');
const path = require('path');
const spawn = require('cross-spawn');
const config = require('../../../config');

// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {

  before: function(browser, done) {
    const opts = [path.resolve(__dirname, '..', 'scripts', 'before_newBuyer.js'), config.mongo.uri];
    const runner = spawn('node', opts, { stdio: 'inherit' });

    runner.on('exit', function (code) {
      if (code === 0) {
        done();
      } else {
        throw new Error('before script error');
      }
    });

    runner.on('error', function (err) {
      throw err;
    });
  },

  'new buyer walkthrough': function test(browser) {
    const devServer = browser.globals.devServerURL;
    const url = new URL(devServer);

    browser
      .url(devServer)
      .waitForElementVisible('input[type=email]', 2000)
      .setValue('input[type=email]', 'cvmtest0001@gmail.com')
      .click('div[role=button]')
      .pause(1000)
      .waitForElementVisible('input[type=password]', 2000)
      .setValue('input[type=password]', 'cvmtestcvmtest')
      .click('div[role=button]')
      .pause(2000)
      .assert.elementPresent('#app');

    browser
      .waitForElementVisible('#setCalendar.modal', 1000)
      .assert.containsText('#setCalendar.modal h5.modal-title', 'Gmail Calendar Selection')
      .assert.elementPresent('#setCalendar.modal select#selCalendar')
      .assert.elementPresent('#setCalendar.modal input#newCalendarName')
      .assert.elementPresent('#setCalendar.modal button#save')
      .assert.containsText('#setCalendar.modal button#save', 'Save')
      .click('#setCalendar.modal button#save')
      .pause(250)
      .assert.elementPresent('#setCalendar.modal')
      .click('#setCalendar.modal select#selCalendar option:nth-child(2)')
      .click('#setCalendar.modal button#save')
      .pause(2000)
      .assert.elementNotPresent('#setCalendar.modal');

    browser
      .assert.hidden('#buyerSettings')
      .click('button#settingsBtn')
      .pause(1000)
      .assert.visible('#buyerSettings')
      .assert.visible('#buyerSettings #tab-profile.el-tabs__item')
      .assert.containsText('#buyerSettings #tab-profile.el-tabs__item', 'Profile')
      .click('#buyerSettings #tab-profile.el-tabs__item')
      .pause(1000)
      .assert.elementPresent('#buyerSettings form#profile input#firstName')
      .assert.elementPresent('#buyerSettings form#profile input#lastName')
      .assert.elementPresent('#buyerSettings form#profile input#phone')
      .assert.elementPresent('#buyerSettings form#profile input#email')
      .assert.elementPresent('#buyerSettings form#profile input#name')
      .assert.elementPresent('#buyerSettings form#profile input#address')
      .assert.elementPresent('#buyerSettings form#profile input#city')
      .assert.elementPresent('#buyerSettings form#profile input#state')
      .assert.elementPresent('#buyerSettings form#profile input#zip')
      .setValue('#buyerSettings form#profile input#firstName', 'CVM')
      .setValue('#buyerSettings form#profile input#lastName', 'Test')
      .setValue('#buyerSettings form#profile input#phone', '111-111-1111')
      .setValue('#buyerSettings form#profile input#email', 'cvmtest0001@gmail.com')
      .setValue('#buyerSettings form#profile input#name', 'CVM Test')
      .setValue('#buyerSettings form#profile input#address', '1 Main Ave.')
      .setValue('#buyerSettings form#profile input#city', 'San Jose')
      .setValue('#buyerSettings form#profile input#state', 'CA')
      .setValue('#buyerSettings form#profile input#zip', '90101')
      .click('#buyerSettings form#profile button#updateProfile')
      .pause(2500)
      .click('#buyerSettings button[aria-label=Close]')
      .pause(1000)
      .assert.hidden('#buyerSettings')
      .pause(1000);

    browser
      .click('button#settingsBtn')
      .pause(1000)
      .assert.visible('#buyerSettings')
      .assert.visible('#buyerSettings #tab-emails.el-tabs__item')
      .assert.containsText('#buyerSettings #tab-emails.el-tabs__item', 'Email Templates')
      .click('#buyerSettings #tab-emails.el-tabs__item')
      .pause(1000)
      .assert.elementPresent('#buyerSettings #pane-emails')
      .assert.elementPresent('#buyerSettings #pane-emails #tab-0')
      .assert.containsText('#buyerSettings #pane-emails #tab-0', 'Approve')
      .click('#buyerSettings #pane-emails #tab-0')
      .pause(1000)
      .assert.elementPresent('#buyerSettings #pane-emails')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor input#subject')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor textarea#body')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor button#update')
      .setValue('#buyerSettings #pane-emails form#approveVendor input#subject', 'So far so good')
      .setValue('#buyerSettings #pane-emails form#approveVendor textarea#body', 'Next step we need to meet')
      .click('#buyerSettings #pane-emails form#approveVendor button#update')
      .pause(500)
      // .assert.elementPresent()
      .pause(2000)
      .click('#buyerSettings button[aria-label=Close]')
      .pause(1000)
      .assert.hidden('#buyerSettings')
      .pause(1000);

    browser
      .click('button#settingsBtn')
      .pause(2000)
      .assert.visible('#buyerSettings')
      .assert.visible('#buyerSettings #tab-emails.el-tabs__item')
      .assert.containsText('#buyerSettings #tab-emails.el-tabs__item', 'Email Templates')
      .click('#buyerSettings #tab-emails.el-tabs__item')
      .pause(1000)
      .assert.elementPresent('#buyerSettings #pane-emails')
      .assert.elementPresent('#buyerSettings #pane-emails #tab-1')
      .assert.containsText('#buyerSettings #pane-emails #tab-1', 'Reject')
      .click('#buyerSettings #pane-emails #tab-1')
      .pause(1000)
      .assert.elementPresent('#buyerSettings #pane-emails')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor input#subject')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor textarea#body')
      .assert.elementPresent('#buyerSettings #pane-emails form#approveVendor button#update')
      .setValue('#buyerSettings #pane-emails form#approveVendor input#subject', 'It\'s a no go')
      .setValue('#buyerSettings #pane-emails form#approveVendor textarea#body', 'Try back next time')
      .click('#buyerSettings #pane-emails form#approveVendor button#update')
      .pause(1000)
      .click('#buyerSettings button[aria-label=Close]')
      .pause(1000)
      .assert.hidden('#buyerSettings')
      .pause(1000);

    browser
      .click('button#addVendor')
      .pause(2000)
      .assert.containsText('#addVendor.modal h5.modal-title', 'Add Vendor')
      .assert.elementPresent('#addVendor.modal input#name')
      .assert.elementPresent('#addVendor.modal input#address')
      .assert.elementPresent('#addVendor.modal input#city')
      .assert.elementPresent('#addVendor.modal input#state')
      .assert.elementPresent('#addVendor.modal input#zip')
      .assert.elementPresent('#addVendor.modal input#firstName')
      .assert.elementPresent('#addVendor.modal input#lastName')
      .assert.elementPresent('#addVendor.modal input#phone')
      .assert.elementPresent('#addVendor.modal input#email')
      .setValue('#addVendor.modal input#name', 'Weed Vendor')
      .setValue('#addVendor.modal input#address', '420 Weed Lane')
      .setValue('#addVendor.modal input#zip', '94025')
      .setValue('#addVendor.modal input#city', 'Redwood City')
      .setValue('#addVendor.modal input#state', 'CA')
      .setValue('#addVendor.modal input#firstName', 'Mr.')
      .setValue('#addVendor.modal input#lastName', 'Vendor')
      .setValue('#addVendor.modal input#phone', '555-555-5555')
      .setValue('#addVendor.modal input#email', 'cvmtest0001@gmail.com')
      .click('#addVendor.modal .modal-footer button#save')
      .pause(2000)
      .assert.elementNotPresent('#addVendor.modal');

    browser
      .pause(5000)
      .end();
  },
};
