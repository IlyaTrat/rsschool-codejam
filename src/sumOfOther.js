module.exports = function sumOfOther(arr) {
  if (!(arr instanceof Array)) { return arr; }
  if (arr.length === 0) { return arr; }
  const sum = arr.reduce((acc, cur) => acc + cur);
  return arr.map(el => sum - el);
};
