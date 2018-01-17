

module.exports = function(browser, values)
{
  browser
    .click(`button#addVendor`)
    .pause(2000)
    .assert.containsText(`#addVendor.modal h5.modal-title`, `Add Vendor`)
    .assert.elementPresent(`#addVendor.modal input#name`)
    .assert.elementPresent(`#addVendor.modal input#address`)
    .assert.elementPresent(`#addVendor.modal input#city`)
    .assert.elementPresent(`#addVendor.modal input#state`)
    .assert.elementPresent(`#addVendor.modal input#zip`)
    .assert.elementPresent(`#addVendor.modal input#firstName`)
    .assert.elementPresent(`#addVendor.modal input#lastName`)
    .assert.elementPresent(`#addVendor.modal input#phone`)
    .assert.elementPresent(`#addVendor.modal input#email`)
    .assert.value('#addVendor.modal input#name', '')
    .assert.value('#addVendor.modal input#address', '')
    .assert.value('#addVendor.modal input#zip', '')
    .assert.value('#addVendor.modal input#city', '')
    .assert.value('#addVendor.modal input#state', '')
    .assert.value('#addVendor.modal input#firstName', '')
    .assert.value('#addVendor.modal input#lastName', '')
    .assert.value('#addVendor.modal input#phone', '')
    .assert.value('#addVendor.modal input#email', '')
    .setValue(`#addVendor.modal input#name`, values.company.name)
    .setValue(`#addVendor.modal input#address`, values.company.address)
    .setValue(`#addVendor.modal input#zip`, values.company.zip)
    .setValue(`#addVendor.modal input#city`, values.company.city)
    .setValue(`#addVendor.modal input#state`, values.company.state)
    .setValue(`#addVendor.modal input#firstName`, values.contact.firstName)
    .setValue(`#addVendor.modal input#lastName`, values.contact.lastName)
    .setValue(`#addVendor.modal input#phone`, values.contact.phone)
    .setValue(`#addVendor.modal input#email`, values.contact.email)
    .click(`#addVendor.modal .modal-footer button#save`)
    .pause(2000)
    .assert.elementNotPresent(`#addVendor.modal`);
};
