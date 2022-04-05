let person1 = {
  name: "John",
  className: "doe",
};
function showDetails() {
  console.log(this.name, this.className);
}
// showDetails
Function.prototype.myBind = function (object) {
  let obj = this;
  return function () {
    // console.log(this);

    obj.call(object);
  };
};
let showDetailsMB = showDetails.myBind(person1);
showDetailsMB();
