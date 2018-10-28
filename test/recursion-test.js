const assert = require('assert');
const recursion = require('../src/recursion');

describe('recursion', () => {
  it('test1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array1 = recursion(tree);

    assert.deepEqual(array1, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('test2', () => {
    const tree = {
      value: 100,
      left: { value: 90, right: { value: 120, right: { value: 130 } } },
    };
    const array2 = recursion(tree);

    assert.deepEqual(array2, [[100], [90], [120], [130]]);
  });

  it('test3', () => {
    const tree = {};
    const array2 = recursion(tree);

    assert.deepEqual(array2, [[undefined]]);
  });

  it('test4', () => {
    const tree = 33;
    const array2 = recursion(tree);

    assert.deepEqual(array2, [[undefined]]);
  });

  it('test5', () => {
    const tree = { value: {} };
    const array2 = recursion(tree);

    assert.deepEqual(array2, [[{}]]);
  });
});
