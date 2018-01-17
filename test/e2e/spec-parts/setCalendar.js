


module.exports = function(browser)
{
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
};
