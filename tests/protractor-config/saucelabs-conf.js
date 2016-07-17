// conf.js
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  specs: ['../support/*.js','../specs/*spec.js'],

  // restartBrowserBetweenTests: true,

  onPrepare: function () {
    var caps = browser.getCapabilities()
  },

  capabilities: {
    'browserName': 'chrome',
    'version': '50',
    'platform': 'Windows 7',
    'tunnel-identifier': 'myTunnel',
    "build": "build-1234",
    'name': 'Chrome-Tests'
  },
  allScriptsTimeout: 20000,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
  // multiCapabilities: [{
  //   browserName: 'chrome',
  //   version: '50',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   maxInstances: 1
  // }],

  onComplete: function () {

    var printSessionId = function (jobName) {
      browser.getSession().then(function (session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
