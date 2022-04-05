function clousers() {
  let x = 2;
  return function (y) {
    return x + y;
  };
}
let result = clousers()(5);
console.log(result);
