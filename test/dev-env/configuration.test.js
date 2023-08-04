/**
 * @module test-dev-env-configuration
 * @description Tests to verify that the development environment is properly configured for integration testing.
 * @author Jonas Persson
 * /
*/

require('../globals.js');
const localPath = require('../local-path.js');
const chai = require('chai');

// Test Setup
const projectRootPath = 'file:///' + localPath + '/JonasPerssonDevelops.github.io';
const testPage1 = projectRootPath + '/test/data/selenium-setup-test01.html';
const testPage2 = projectRootPath + '/test/data/selenium-setup-test02.html';

// Tests
suite('Development environment configuration checks. These pass when the env has been set up correctly.', () => {
    
    test('Mocha starts the test, Selenium starts, the Webdriver function returns the title of the page, and Chai tests the title for a match.', async () => {
        await driver.get(testPage1);
        let title = await driver.getTitle();
        chai.expect(title).to.equal('Test Page 1');
    }).timeout(8000);

    test('Navigate to next page and check the title', async () => {
        await driver.get(testPage2);
        let title = await driver.getTitle();
        chai.expect(title).to.equal('Test Page 2');
    }).timeout(8000);

    teardown('Dev. env. failure', function () {
        if (this.currentTest.state === 'failed') {
            devEnvCorrectlySetup = false;
        }
    });

    suiteTeardown(function () {
        if(!devEnvCorrectlySetup) {
            driver.quit();
        }
    });
});
