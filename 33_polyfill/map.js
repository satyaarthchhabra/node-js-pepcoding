Array.prototype.myMap = function (callbackFn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
};

let a = [2, 3, 4, 5];
let arr = a.myMap((e) => {
  return e + 1;
});
arr = a.myMap((e) => e % 2 == 0);
console.log(arr);
