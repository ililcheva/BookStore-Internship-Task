import { MilenaBooksPage } from './app.po';

describe('milena-books App', () => {
  let page: MilenaBooksPage;

  beforeEach(() => {
    page = new MilenaBooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
