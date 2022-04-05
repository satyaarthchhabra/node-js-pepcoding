let person1 = {
  name: "John",
  age: 21,
  showDate: function () {
    console.log(this.name + this.age);
  },
};
let person2 = {
  name: "Johnaaaaaaaaaaaaa",
};
person2.__proto__ = person1;
person2.showDate();
