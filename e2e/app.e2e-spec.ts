import { AngularcfgPage } from './app.po';

describe('angularcfg App', () => {
  let page: AngularcfgPage;

  beforeEach(() => {
    page = new AngularcfgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
