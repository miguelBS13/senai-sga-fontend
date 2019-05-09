import { LOCADORADEMOPage } from './app.po';

describe('locadora-demo App', () => {
  let page: LOCADORADEMOPage;

  beforeEach(() => {
    page = new LOCADORADEMOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
