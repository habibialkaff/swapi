/* eslint-disable */

describe('Test to check Index Redirect', function() {
  it('should redirect to People page', function() {
    browser.url('/');
    browser.waitForVisible('[data-test="header"]');
    const path = browser.getUrl().split('/').pop();
    expect(path).to.equal('people');    
  })
})

describe('Test to check header items', function () {
  it('should have all 6 items', function () {
    browser.url('/');
    browser.waitForVisible('[data-test="header"]');    
    const items = browser.getText('[data-test="header"]>a');
    expect(items).to.have.members(['People', 'Planet', 'Film', 'Species', 'Starship', 'Vehicle']);
  });
});