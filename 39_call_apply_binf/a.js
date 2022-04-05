let person1 = {
  name: "satyaaarth",
  city: "delhi",
  getInfo: function () {
    console.log(`${this.name} is from ${this.city}`);
  },
};
let person2 = {
  name: "Raja",
  city: "aa",
};

function printNameWithDesignation(designation, company) {
  console.log(
    `${this.name} is ${designation} at`,
    company != undefined ? company : "not known"
  );
}

// Call(this,arg1,arg2,arg3......argN) calls person1.getInfo() for person2

console.log("line 19");
person1.getInfo.call(person2);
console.log("line 21");
printNameWithDesignation.call(person1, "Software Engineer", "pepcoding");

// apply(this,[...args])

console.log("line 26");
printNameWithDesignation.apply(person1, ["Software Engineer", "pepcoding"]);

// bind(this,arg1,arg2,arg3......argN): function(){}

console.log("line 31");
let print = printNameWithDesignation.bind(
  person1,
  "Software Engineer",
  "pepcoding"
);
print();

// OR

print = printNameWithDesignation.bind(person1);

console.log("line 39");
print("Software Engineer", "pepcoding");
