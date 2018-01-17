

module.exports = function(browser, type) {

  let tabIndex;
  let tabLabel;
  let formId;

  if (type === 'approve') {
    tabIndex = 0;
    tabLabel = 'Approve';
    formId = 'approveVendor';
  } else if (type == 'reject') {
    tabIndex = 1;
    tabLabel = 'Reject';
    formId = 'rejectVendor';
  }

  browser
    .pause(1000)
    .click(`button#settingsBtn`)
    .pause(1000)
    .assert.visible(`#buyerSettings`)
    .assert.visible(`#buyerSettings #tab-emails.el-tabs__item`)
    .assert.containsText(`#buyerSettings #tab-emails.el-tabs__item`, `Email Templates`)
    .click(`#buyerSettings #tab-emails.el-tabs__item`)
    .pause(1000)
    .assert.elementPresent(`#buyerSettings #pane-emails`)
    .assert.elementPresent(`#buyerSettings #pane-emails #tab-${tabIndex}`)
    .assert.containsText(`#buyerSettings #pane-emails #tab-${tabIndex}`, `${tabLabel}`)
    .click(`#buyerSettings #pane-emails #tab-${tabIndex}`)
    .pause(1000)
    .assert.elementPresent(`#buyerSettings #pane-emails`)
    .assert.elementPresent(`#buyerSettings #pane-emails form#${formId}`)
    .assert.elementPresent(`#buyerSettings #pane-emails form#${formId} input#subject`)
    .assert.elementPresent(`#buyerSettings #pane-emails form#${formId} textarea#body`)
    .assert.elementPresent(`#buyerSettings #pane-emails form#${formId} button#update`)
    .clearValue(`#buyerSettings #pane-emails form#${formId} input#subject`)
    .setValue(`#buyerSettings #pane-emails form#${formId} input#subject`, `So far so good`)
    .clearValue(`#buyerSettings #pane-emails form#${formId} textarea#body`)
    .setValue(`#buyerSettings #pane-emails form#${formId} textarea#body`, `Next step we need to meet`)
    .click(`#buyerSettings #pane-emails form#${formId} button#update`)
    .pause(500)
    // .assert.elementPresent()
    .pause(2000)
    .click(`#buyerSettings button[aria-label=Close]`)
    .pause(1000)
    .assert.hidden(`#buyerSettings`)
    .pause(1000);

}
