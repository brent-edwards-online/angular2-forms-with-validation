import { ModuleAppPage } from './app.po';

describe('module-app App', () => {
  let page: ModuleAppPage;

  beforeEach(() => {
    page = new ModuleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
