/**
 * @module test-integration contact-page
 * @description Integration tests for jonaspersson.dev/contact.html
 * @author Jonas Persson
 * /
*/

require('../globals.js');
const localPath = require('../local-path.js');

// Tools
const assert = require('chai').assert;
const By = selwebdriver.By;
const until = selwebdriver.until;

// Test Data
const init_user = "sanoj";
const init_dm = "ved.nossrepsanoj@"
const user = init_user.split("").reverse().join("");
const dm = init_dm.split("").reverse().join("");
const ad = user + dm;

// Test Setup
const contactPage = 'file:///' + localPath + '/JonasPerssonDevelops.github.io/contact.html';

// Tests
suite('jonaspersson.dev/contact.html', () => {
    
    test('Email address shows when the show email button is clicked', async () => {
        let testResult = false;
        await driver.get(contactPage);
        const button = await driver.findElement(By.id('show-email'));
        const emailAddressElem = await driver.findElement(By.id('email-address'));
        await driver.executeScript('arguments[0].click();', button);
        await driver.wait(until.elementTextContains(emailAddressElem, ad), 1000).then( async () => { 
            let textContent = await emailAddressElem.getText();
            assert.strictEqual(textContent, ad);
        } , async () => {
            let textContent = await emailAddressElem.getText();
            assert.strictEqual(textContent, ad);
        });
    }).timeout(5000);
});
