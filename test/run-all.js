/**
 * @module test-run-all
 * @description This module runs all tests (development environment setup check, integration, and unit).
 * @author Jonas Persson
 * /
*/
require('./globals.js');
const path = require('node:path');
const nodeDir = require('node-dir');

// Catalogue all test files:
const unitTests = nodeDir.files(path.normalize(__dirname + '/unit'), {sync:true});
const intTests = nodeDir.files(path.normalize(__dirname + '/int'), {sync:true});

suite('Unit Tests', function () {
    unitTests.forEach(function (test) {
        require(test);
    });
});

require('./dev-env/configuration.test.js'); // Development environment setup tests for ensuring that integration tests can be run

suite('Integration Tests', function () {
    
    suiteSetup(function () {
        if (!devEnvCorrectlySetup) {
            this.skip();
        }
    });
    
    intTests.forEach(function (test) {
        require(test);
    });
    
    suiteTeardown(function () {
        driver.quit();
    });
});
