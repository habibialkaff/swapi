/* eslint-disable */

describe('Test to check Planet Page', function () {
  it('should be sorted in ascending order', function () {
    let isSorted = true;

    browser.url('/planets');
    browser.waitForVisible('[data-test="planet-list"]');
    const items = browser.getText('[data-test="planet-list"]>div>span>div>div');
    
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        break;
      }
    }

    expect(isSorted).to.be.true;
  })
})