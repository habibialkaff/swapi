/* eslint-disable */

describe('Test to check Film Page', function () {
  it('should be sorted in ascending order', function () {
    let isSorted = true;

    browser.url('/films');
    browser.waitForVisible('[data-test="film-list"]');
    const items = browser.getText('[data-test="film-list"]>div>span>div>div');
    
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        break;
      }
    }

    expect(isSorted).to.be.true;
  })
})