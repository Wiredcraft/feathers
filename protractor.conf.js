// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  //capabilities: {
    //'browserName': 'phantomjs',
    //'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
    //'phantomjs.cli.args': []
  //},

  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*.js'],

  framework: 'mocha',
  baseUrl: 'http://localhost:8000',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
