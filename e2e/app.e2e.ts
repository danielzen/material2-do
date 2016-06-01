import { Material2DoPage } from './app.po';

describe('material2-do App', function() {
  let page: Material2DoPage;

  beforeEach(() => {
    page = new Material2DoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('material2-do works!');
  });
});
