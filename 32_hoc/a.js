let a = [1, 2, 3, 4, 5, 6];
let b = a.map((e) => e + 1);
let iseven = a.filter((e) => e % 2 == 0);
let sum = a.reduce((accu, curr) => {
  return accu + curr;
}, 0);

console.log(a);
console.log(b);
console.log(iseven);
console.log(sum);
