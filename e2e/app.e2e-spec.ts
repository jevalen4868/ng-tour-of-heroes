import { NgTourOfHeroesPage } from './app.po';

describe('ng-tour-of-heroes App', () => {
  let page: NgTourOfHeroesPage;

  beforeEach(() => {
    page = new NgTourOfHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
