import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getElementBycss(str) {
    return element(by.css(str));
  }

  getAllElementByCss(str) {
    return element.all(by.css(str));
  }

  getElementByXpath(str) {
    return element(by.xpath(str));
  }
}
