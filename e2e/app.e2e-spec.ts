import { Ng4ReaderPage } from './app.po';

describe('ng4-reader App', () => {
  let page: Ng4ReaderPage;

  beforeEach(() => {
    page = new Ng4ReaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
