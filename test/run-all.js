/**
 * @module test-run-all
 * @description 
 * This module runs all tests of this personal web site project (development environment setup check, integration, and unit).
 * @author Jonas Persson
 * /
*/

const chai = require('chai');

require('./int/contact-page.test.js');

suite('More sample tests', function () {
    test('Test case 3', async () => {
        let i = 2;
        chai.expect(i).to.equal(2);
    });
});
