import { TesteB2wPage } from './app.po';

describe('teste-b2w App', function() {
  let page: TesteB2wPage;

  beforeEach(() => {
    page = new TesteB2wPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
