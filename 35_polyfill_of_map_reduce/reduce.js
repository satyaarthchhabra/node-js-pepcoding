Array.prototype.myReduce = function (callbackFn, initialVal) {
  let accumulator = initialVal;
  for (let index = 0; index < this.length; index++) {
    accumulator = callbackFn(accumulator, this[index], this);
  }
  return accumulator;
};
let a = [2, 3, 4, 5, 6];
let arr = a.myReduce((a, c) => a + c, 0);
console.log(arr);
