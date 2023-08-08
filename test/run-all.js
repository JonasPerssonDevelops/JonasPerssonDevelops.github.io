/**
 * @module test-run-all
 * @description This module runs all tests (development environment setup check, integration, and unit).
 * @author Jonas Persson
 * /
*/

require('./globals.js');

// Tests
suite('Unit Tests', function () {

    // Add unit tests here with require()
    require('./unit/string-manip.test.js');

});

// Development environment setup tests for ensuring that integration tests can be run
require('./dev-env/configuration.test.js');

suite('Integration Tests', function () {
    
    suiteSetup(function () {
        if (!devEnvCorrectlySetup) {
            this.skip();
        }
    });
    
    // Add integration tests here with require()
    require('./int/contact-page.test.js');
    
    suiteTeardown(function () {
        driver.quit();
    });
});
