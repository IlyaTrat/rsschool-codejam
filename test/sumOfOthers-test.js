const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

describe('sumofother', () => {
  it('arr1', () => {
    const arr1 = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr1, [8, 7, 6, 9]);
  });

  it('arr2', () => {
    const arr2 = sumOfOther();
    assert.deepEqual(arr2, undefined);
  });

  it('arr3', () => {
    const arr3 = sumOfOther([]);
    assert.deepEqual(arr3, []);
  });

  it('arr4', () => {
    const arr4 = sumOfOther([100]);
    assert.deepEqual(arr4, [0]);
  });
});
