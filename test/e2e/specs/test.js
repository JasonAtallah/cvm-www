const { URL } = require('url');

// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;
    const url = new URL(devServer);

    browser
      .url(devServer)
      .waitForElementVisible('input[type=email]', 5000)
      .setValue('input[type=email]', 'cvmtest0001@gmail.com')
      .click('div[role=button]')
      .pause(1000)
      .waitForElementVisible('input[type=password]', 5000)
      .setValue('input[type=password]', 'cvmtestcvmtest')
      .click('div[role=button]')
      .pause(1500)
      .assert.elementPresent('#app');

    browser
      .end();
  },
};
