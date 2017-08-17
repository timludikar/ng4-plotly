import { PlotlyPage } from './app.po';

describe('plotly App', () => {
  let page: PlotlyPage;

  beforeEach(() => {
    page = new PlotlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
