function private() {
  let Name = "";
  let setName = function (name) {
    Name = name;
  };
  let getName = function () {
    return Name;
  };
  return { setName, getName };
}

let { setName, getName } = private();
setName("satyaarth");
console.log(getName());
