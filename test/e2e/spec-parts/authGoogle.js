const { URL } = require('url');

module.exports = function(browser)
{
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
};
