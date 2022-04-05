Array.prototype.myFilter = function (callbackFn) {
  let arr = [];
  for (let index = 0; index < this.length; index++) {
    if (callbackFn(this[index], index, this)) arr.push(this[index]);
  }
  return arr;
};
let a = [2, 3, 4, 5, 6];
let arr = a.myFilter((e) => e % 2 == 0);
console.log(arr);
