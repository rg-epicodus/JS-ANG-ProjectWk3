import { JSANGProjectWk3Page } from './app.po';

describe('js-ang-project-wk3 App', () => {
  let page: JSANGProjectWk3Page;

  beforeEach(() => {
    page = new JSANGProjectWk3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
