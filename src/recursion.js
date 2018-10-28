module.exports = function recursion(obj, index = 0, res = []) {
  const ind = index + 1;
  if (typeof res[index] === 'undefined') res[index] = [];
  res[index].push(obj.value);
  if (typeof obj.left === 'object') {
    recursion(obj.left, ind, res);
  }
  if (typeof obj.right === 'object') {
    recursion(obj.right, ind, res);
  }
  return res;
};
