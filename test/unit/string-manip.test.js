/**
 * @module test-string-manip
 * @description Tests for the string-manip module
 * @author Jonas Persson
 */

const assert = require('chai').assert;
const sm = require('../../scripts/string-manip.js');

suite('string-manip Module Tests', function () {
    test('reverseString() reverses the order of characters in a string', function () {
        assert.strictEqual('12345', sm.reverseString('54321'));
    });
    test('reverseString() reverses the order of characters in a string 2', function () {
        assert.strictEqual('12345', sm.reverseString('54321'));
    });
});
