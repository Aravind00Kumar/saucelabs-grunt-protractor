// conf.js
var path = require('path');

exports.config = {

  seleniumServerJar: path.join(__dirname, "../../bin/selenium-server-standalone-2.53.0.jar"),
  chromeDriver: path.join(__dirname, "../../bin/chromedriver.exe"),
  seleniumPort: 4444,

  specs: ['../support/*.js','../specs/*spec.js'],

  // restartBrowserBetweenTests: true,

  onPrepare: function () {
    var caps = browser.getCapabilities()
  },

  capabilities: {
    'browserName': 'chrome',
    'version': '50',
    'name': 'Chrome-Tests'
  },
  allScriptsTimeout: 20000,
}
