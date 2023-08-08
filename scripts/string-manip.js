/**
 * @module string-manip
 * @description Module for string operations
 * @author Jonas Persson
 */

function reverseString(str) {
    return str.split("").reverse().join("");
  }

if (typeof exports !== 'undefined') {       // Allows for testing under Node
    exports.reverseString = reverseString;
}
