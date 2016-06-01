export class Material2DoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('material2-do-app h1')).getText();
  }
}
