

module.exports = function(browser, values)
{
  browser
    .click(`button#addEvent`)
    .pause(2000)
    .assert.containsText(`#addEvent.modal .modal-header h5.modal-title`, `Add Event`)
    .assert.elementPresent(`#addEvent.modal .modal-body input#name`)
    .assert.elementPresent(`#addEvent.modal .modal-body input#date`)
    .assert.elementPresent(`#addEvent.modal .modal-body input#time`)
    .assert.elementPresent(`#addEvent.modal .modal-body input#duration`)
    .assert.elementPresent(`#addEvent.modal .modal-body input#location`)
    .assert.value('#addEvent.modal .modal-body input#name', '')
    .assert.value('#addEvent.modal .modal-body input#date', '')
    .assert.value('#addEvent.modal .modal-body input#time', '')
    .assert.value('#addEvent.modal .modal-body input#duration', '')
    .assert.value('#addEvent.modal .modal-body input#location', '')
    .setValue(`#addEvent.modal .modal-body input#name`, values.name)
    .setValue(`#addEvent.modal .modal-body input#date`, values.date)
    .setValue(`#addEvent.modal .modal-body input#time`, values.time)
    .setValue(`#addEvent.modal .modal-body input#duration`, values.duration)
    .setValue(`#addEvent.modal .modal-body input#location`, values.location)
    .click(`#addEvent.modal .modal-footer button#save`)
    .pause(5000)
    .assert.elementNotPresent(`#addEvent.modal`);
};
