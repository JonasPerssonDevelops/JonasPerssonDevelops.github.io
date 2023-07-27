/**
 * @module test-integration-contact-page
 * @description contact.html integration tests
 * @author Jonas Persson
 * /
*/

const chai = require('chai');

// Sample test to verify that the testing pattern works
module.exports = 
    suite('Development environment set up check', function () {
        test('Test case 1', async () => {
            let i = 0;
            chai.expect(i).to.equal(0);
        });
        // Set it to bail somewhere here
        test('Test case 2', async () => {
            let i = 2;
            chai.expect(i).to.equal(2);
        });
    });  
