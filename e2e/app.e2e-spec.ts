import { KammaWebsitePage } from './app.po';

describe('kamma-website App', () => {
  let page: KammaWebsitePage;

  beforeEach(() => {
    page = new KammaWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
