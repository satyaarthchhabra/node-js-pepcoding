function multiply(x, y) {
  return x * y;
}

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);
let x = multiplyByTwo(5);
let y = multiplyByThree(5);
// console.log(x);
// console.log(y);

// Modern way of function curring using clousers

let mulBy = function (x) {
  return function (y) {
    return x * y;
  };
};

let mulByTwo = mulBy(2);
let mulByThree = mulBy(3);

x = mulByTwo(5);
y = mulByThree(5);
console.log(x, y);
