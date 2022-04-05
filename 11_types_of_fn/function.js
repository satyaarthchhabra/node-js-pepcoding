function sayHi(param) {
  let rVal = Math.random() > 0.5 ? true : "less then 0.5";
  return rVal;
}
let rVal = sayHi([1, 2, 3, 4, 5]);
console.log("rval", rVal);
