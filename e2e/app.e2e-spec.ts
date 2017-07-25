import { PROJECTA4CLIPage } from './app.po';

describe('project-a4-cli App', () => {
  let page: PROJECTA4CLIPage;

  beforeEach(() => {
    page = new PROJECTA4CLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
