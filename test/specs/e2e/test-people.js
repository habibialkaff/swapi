/* eslint-disable */

describe('Test to check People Page', function () {
  it('should be sorted in ascending order', function () {
    let isSorted = true;

    browser.url('/people');
    browser.waitForVisible('[data-test="people-list"]');
    const items = browser.getText('[data-test="people-list"]>div>span>div>div');
    
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        break;
      }
    }

    expect(isSorted).to.be.true;
  })
})