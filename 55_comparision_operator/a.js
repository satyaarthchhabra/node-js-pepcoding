// / == vs ===
console.log(2 == "2");
console.log(2 === "2");

function testTruthyFalsy(val) {
  return val ? "truthy" : "falsy";
}

// falsy
console.log(10, testTruthyFalsy(false));
console.log(11, testTruthyFalsy(0));
console.log(12, testTruthyFalsy(""));
console.log(13, testTruthyFalsy(null));
console.log(14, testTruthyFalsy(undefined));
console.log(15, testTruthyFalsy(NaN));

// truthy

console.log(19, testTruthyFalsy(true));
console.log(20, testTruthyFalsy(-2));
console.log(21, testTruthyFalsy("hello"));
console.log(22, testTruthyFalsy(new Boolean(false)));
