async function inc(x) {
  x = x + (await 1);
  return x;
}

async function increment(x) {
  x = x + 1;
  return x;
}

inc(1).then((x) => {
  increment(x).then((x) => {
    console.log(x);
  });
});

let p = new Promise((resolve, reject) => {
  reject(new Error("Some error"));
  setTimeout(() => {
    reject(new Error("some error"));
  }, 1000);
  reject(new Error("some error"));
});

p.then(null, (err) => {
  console.log(1);
  console.log(err);
}).catch((err) => {
  console.log(2);
  console.log(err);
});
async function f1() {
  console.log(1);
}

async function f1() {
  console.log(2);
}
console.log(3);
f1();
console.log(1);
f2();
async function f2() {
  console.log("Go!");
}

function resolveAfterNSeconds(n, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  a.then(async function (x) {
    let y = await resolveAfterNSeconds(2000, 2);
    let z = await resolveAfterNSeconds(1000, 3);
    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(2000, 5);
    console.log(x + y + z + (await p) + (await q));
  });
})();
