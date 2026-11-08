
const { Builder, By } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

driver.then(function(browser) {

    return browser.get("local path for addition.html//addition.html")
        .then(() => browser.findElement(By.id('num1')).sendKeys('10'))
        .then(() => browser.findElement(By.id('num2')).sendKeys('20'))
        .then(() => browser.findElement(By.id('addBtn')).click())
        .then(() => browser.findElement(By.id('result')).getText())
        .then(function(result) {

            console.log('Actual Result:', result);

            if (result === 'Result: 30') {
                console.log('TEST PASSED!');
            } else {
                console.log('TEST FAILED!');
            }

        });

}).finally(function() {
    return driver.quit();
});
