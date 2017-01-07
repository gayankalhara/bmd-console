import { BmdConsolePage } from './app.po';

describe('bmd-console App', function() {
  let page: BmdConsolePage;

  beforeEach(() => {
    page = new BmdConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
