const assert = require('assert');
const make = require('../make');

describe('make', () => {
  it('test1', () => {
    function sum(a, b) {
      return a + b;
    }
    const test1 = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(test1, 777);
  });

  it('test2', () => {
    function sum(a, b) {
      return a + b;
    }
    const test1 = make(15, 33)(34, 21, 666)(41)(sum);
    assert.deepEqual(test1, 810);
  });

  it('test3', () => {
    function subtract(a, b) {
      return a - b;
    }
    const test2 = make(11, 22)(11)(subtract);
    assert.deepEqual(test2, 0);
  });
});
