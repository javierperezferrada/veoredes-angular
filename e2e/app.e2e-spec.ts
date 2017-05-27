import { VeoredesAngularPage } from './app.po';

describe('veoredes-angular App', () => {
  let page: VeoredesAngularPage;

  beforeEach(() => {
    page = new VeoredesAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
