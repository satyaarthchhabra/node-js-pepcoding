function car(name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.print = function () {
    console.log(
      `Name-> ${this.name}\nModel-> ${this.model}\nColor-> ${this.color}`
    );
  };
}
let car1 = new car("BMW", "7-series", "blue");
let car2 = new car("Audi", "A8", "white");

car1.print();
car2.print();
