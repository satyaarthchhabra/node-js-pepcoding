import { existsSync, readFileSync } from "fs";

let inputArr = process.argv.slice(2);

let optionsArr = [];
let filesArr = [];
// identify -> options
for (let i = 0; i < inputArr.length; i++) {
  let firstChar = inputArr[i].charAt(0);
  if (firstChar == "-") {
    optionsArr.push(inputArr[i]);
  } else {
    filesArr.push(inputArr[i]);
  }
}
// options check

if (optionsArr.includes("-b") && optionsArr.includes("-n")) {
  console.log("either enter -n or -b option");
  process.exit(1);
}

// existence
for (let i = 0; i < filesArr.length; i++) {
  if (!existsSync(filesArr[i])) {
    console.log(`file ${filesArr[i]} is not present`);
    process.exit(1);
  }
}
// read

let contentArr = [];
filesArr.map((file, i) => {
  const currContentArray = readFileSync(file).toString().split("\n");
  contentArr = [...contentArr, ...currContentArray];
});

if (optionsArr.includes("-s")) {
  let res = [];
  var filtered = contentArr.filter((el) => el.length != 0);
  contentArr = filtered;
}

if (optionsArr.includes("-n")) {
  contentArr = contentArr.map((el, i) => `${i + 1} ${el} `);
}
// console.log(contentArr);
// console.log(contentArr.join("\n"));

if (optionsArr.includes("-b")) {
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != "") {
      // contentArr[i] = `${i + 1} ${contentArr[i]} `;
      contentArr[i] = `${counter} ${contentArr[i]}`;
      counter++;
    }
  }
}
console.log(contentArr.join("\n"));
