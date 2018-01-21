


module.exports = function(browser, page, hash)
{
  browser
    .assert.containsText(`div.pageMenuItem.${page.toLowerCase()}-page`, page)
    .click(`div.pageMenuItem.${page.toLowerCase()}-page`)
    .pause(500)
    .assert.urlContains(hash);
};
