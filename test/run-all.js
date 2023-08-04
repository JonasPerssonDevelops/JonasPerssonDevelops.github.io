/**
 * @module test-run-all
 * @description 
 * This module runs all tests (development environment setup check, integration, and unit).
 * @author Jonas Persson
 * /
*/

require('./globals.js');
const chai = require('chai');

// Tests

require('./dev-env/configuration.test.js');

suite('Integration Tests', function () {
    
    suiteSetup(function () {
        if (!devEnvCorrectlySetup) {
            this.skip();
        }
    });
    
    // Add integration tests here with require()
    
    suiteTeardown(function () {
        driver.quit();
    });
});

suite('Testing Framework Sample Tests', function () {

    test('Test case 3', async () => {
        let i = 2;
        chai.expect(i).to.equal(2);
    });

    test('Test case 4', async () => {
        let i = 3;
        chai.expect(i).to.equal(3);
    });
});
