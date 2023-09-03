/**
 * @module test-globals
 * @description Global variables for testing
 * @author Jonas Persson
 * /
*/
const path = require('node:path');

require('./tools/selwebdriver.js');
global.websiteRootPath = path.join(__dirname, '..').replace(/\\/g, '/');;
global.devEnvCorrectlySetup = true;
