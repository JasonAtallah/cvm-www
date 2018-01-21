exports.assertion = function (name) {
  this.message = 'Testing if vendor <' + name + '> is in the vendor list';
  this.expected = true;
  this.pass = function (val) {
    return val === this.expected;
  }
  this.value = function (res) {
    return res.value;
  }
  this.command = function (cb) {
    var self = this;
    return this.api.execute(function (selector, nameOfInterest) {
      let itemHeaders = document.querySelectorAll(selector);
      let itemNames = [];
      itemHeaders.forEach((node) => { itemNames.push(node.innerText); });
      let itemsOfInterest = itemNames.filter(n => n === nameOfInterest);
      return itemsOfInterest.length === 1;
    }, ['div.vendor-list-items ul li h5', name], function (res) {
      cb.call(self, res);
    });
  }
}
