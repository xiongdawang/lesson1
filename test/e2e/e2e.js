// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.baidu.com/');
// driver.findElement(By.name('wd')).sendKeys('html');
// driver.findElement(By.id('su')).click();
// driver.wait(until.titleIs('html_百度搜索'), 1000);
// driver.quit();

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('file:///D:/book/work/lesson1/index.html');
// driver.findElement(By.id('hand')).click();
for (var i = 0; i < 10; i++) {
	driver.findElement(By.id('hand')).click();
}
driver.wait(until.titleIs('点赞'), 1000);
driver.quit();













