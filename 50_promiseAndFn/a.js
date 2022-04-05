let p1 = new Promise((resolve, reject) => {
  resolveWithDelay(3000, 1, resolve);
});
let p2 = new Promise((resolve, reject) => {
  resolveWithDelay(1000, 2, resolve);
});
let p3 = new Promise((resolve, reject) => {
  resolveWithDelay(2000, 3, resolve);
});
let p4 = new Promise((resolve, reject) => {
  rejectWithDelay(4000, 4, reject);
});
function resolveWithDelay(delay, val, resolve) {
  setTimeout(() => {
    resolve(val);
  }, delay);
}
function rejectWithDelay(delay, val, reject) {
  setTimeout(() => {
    reject("Error " + val);
  }, delay);
}
let z = Promise.all([p1, p2, p3, p4]);
z.then((val) => {
  console.log(val);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("I will get executed for sure");
  });
let x = Promise.race([p1, p2, p3]);
x.then((val) => {
  console.log(val);
});
let y = Promise.all([p1, p2, p3]);
y.then((val) => {
  console.log(val);
});
let s = Promise.allSettled([p1, p2, p3, p4]);
s.then((val) => {
  console.log(val);
});
