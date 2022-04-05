// setTimeout(() => {
//   console.log("1");
// });
// setTimeout(() => {
//   console.log("2");
// });
// setTimeout(() => {
//   console.log("3");
// });
// let p = new Promise((resolve, reject) => {
//   resolve();
// });
// p.then((res) => {
//   console.log("13");
// });
// p.then((res) => {
//   console.log("14");
// });

let p = new Promise((res, rej) => {
  rej(1);
});
p.then(null, (err) => {
  console.log(1);
  console.log(err);
}).catch((err) => {
  console.log("1212");
});

function delay(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}
delay(30000).then(() => {
  console.log("delay created");
});
