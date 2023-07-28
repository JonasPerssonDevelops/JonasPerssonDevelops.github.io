/**
 * @module sel-webdriver-tool
 * @description 
 * Webdriver setup for integration testing
 * @author Jonas Persson
 * /
*/

const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('firefox').build();

module.exports = driver;
