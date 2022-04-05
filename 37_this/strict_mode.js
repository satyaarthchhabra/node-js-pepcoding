"use strict";
console.log("L1 ", this);
(function f1() {
  console.log("L3 ", this);
})();
let student = {
  name: "Shivam",
  print: function () {
    console.log("L8 ", this);
  },
};
let student2 = {
  name: "Rahul",
  print: function () {
    function printAgain() {
      console.log("L15 ", this);
    }
    printAgain();
  },
};
student.print();
student2.print();
