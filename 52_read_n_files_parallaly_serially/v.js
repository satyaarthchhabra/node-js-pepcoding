const fs = require("fs").promises;

let fileArr = ["f1.txt", "f2.txt", "f3.txt", "f4.txt"];

function readParallel(fileArr) {
  fileArr.forEach((e) => {
    fs.readFile(e, "utf-8").then((data) => {
      console.log(data);
    });
  });
}

function readSerial(fileArr) {
  let fileReadPromise = fs.readFile(fileArr[0], "utf-8");
  for (let i = 1; i < fileArr.length; i++) {
    fileReadPromise = fileReadPromise.then((data) => {
      console.log(data);
      return fs.readFile(fileArr[i], "utf-8");
    });
  }
  fileReadPromise.then((data) => {
    console.log(data);
  });
}

//readParallel(fileArr)
readSerial(fileArr);
