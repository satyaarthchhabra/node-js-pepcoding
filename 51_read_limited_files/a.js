const fs = require("fs").promises;

// serial reading using promises

let f1 = fs.readFile("f1.txt", "utf-8");

let cb1 = (data) => {
  console.log(data);
  return fs.readFile("f2.txt", "utf-8");
};

let cb2 = (data) => {
  console.log(data);
  return fs.readFile("f3.txt", "utf-8");
};

let cb3 = (data) => {
  console.log(data);
};

// f1.then(cb1).then(cb2).then(cb3).catch(err => {
//     console.log(err)
// })

// parallel reading using promises;

let parallel_f1 = fs.readFile("f1.txt", "utf-8");
let parallel_f2 = fs.readFile("f2.txt", "utf-8");
let parallel_f3 = fs.readFile("f3.txt", "utf-8");

parallel_f1.then((data) => {
  console.log(data);
});
parallel_f2.then((data) => {
  console.log(data);
});
parallel_f3.then((data) => {
  console.log(data);
});
