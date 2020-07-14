// Generated by Selenium IDE
console.time()
chrome = require('selenium-webdriver/chrome')
console.timeEnd()
console.time()
const { Builder, By, Key, until } = require('selenium-webdriver')
console.timeEnd()
const assert = require('assert')


describe('test6', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    console.time()
    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments("--no-sandbox","----disable-dev-shm-usage").headless()).build()
    console.timeEnd()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test6', async function() {
    await driver.get("https://www.google.es")
  })
})
