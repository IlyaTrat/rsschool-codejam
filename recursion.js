function recursion(obj, index = 0, res = []) {
  typeof res[index] === 'undefined' ? res[index] = [] : false;
  res[index].push(obj.value);
  if(typeof obj.left === 'object') {
    recursion(obj.left, ++index, res);
  }
  if(typeof obj.right === 'object') {
    recursion(obj.right, index, res);
  }
  return res;
}