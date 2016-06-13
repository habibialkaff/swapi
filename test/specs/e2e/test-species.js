/* eslint-disable */

describe('Test to check Species Page', function () {
  it('should be sorted in ascending order', function () {
    let isSorted = true;

    browser.url('/species');
    browser.waitForVisible('[data-test="species-list"]');
    const items = browser.getText('[data-test="species-list"]>div>span>div>div');
    
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        break;
      }
    }

    expect(isSorted).to.be.true;
  })
})