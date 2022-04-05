const lib = require("./lib");
let amount = 2000;
let tocut = 200;
function chargeDebitCard() {
  amount = amount - tocut;
  console.log("remaing", amount);
}

let promiseObj = lib.promiseUpdate("tv").then(chargeDebitCard);
