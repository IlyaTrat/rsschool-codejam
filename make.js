module.exports = function make(data, ...arr) {
  if (typeof data[0] === 'function') {
    return arr.reduce(data[0]);
  }
  if (typeof data === 'object') {
    arr.push(...data);
  } else {
    arr.push(data);
  }
  return (...a) => make(a, ...arr);
};
