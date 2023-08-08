/**
 * @module sel-webdriver-tool
 * @description 
 * Webdriver setup for integration testing
 * @author Jonas Persson
 * /
*/

global.selwebdriver = require('selenium-webdriver');
global.driver = new selwebdriver.Builder().forBrowser('firefox').build();
