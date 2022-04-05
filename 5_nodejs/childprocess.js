let cp = require("child_process");
// cp.execSync("code");
cp.execSync("start chrome https:\\www.pepcoding.com");
let output = cp.execSync("node abc.js");
console.log("output 🔥 " + output);
