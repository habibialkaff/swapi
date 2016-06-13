/* eslint-disable */

describe('Test to check Starship Page', function () {
  it('should be sorted in ascending order', function () {
    let isSorted = true;

    browser.url('/starships');
    browser.waitForVisible('[data-test="starship-list"]');
    const items = browser.getText('[data-test="starship-list"]>div>span>div>div');
    
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        isSorted = false;
        break;
      }
    }

    expect(isSorted).to.be.true;
  })
})