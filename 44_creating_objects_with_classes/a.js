class Car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  print() {
    console.log(
      `Name-> ${this.name}\nModel-> ${this.model}\nColor-> ${this.color}`
    );
  }
}
let car1 = new Car("bmw", "x5", "white");
let car2 = new Car("Tata", "tiago", "gray");

// car1.print()
// car2.print()

// Classical Inheritance

class SportsCar extends Car {
  constructor(...args) {
    // "Ferrari", "spider", "red"
    super(...args);
  }
  top_speed = 300; // initialised without contructure
  printSportCar() {
    console.log(
      `Name-> ${this.name}\nModel-> ${this.model}\nColor-> ${this.color}\nTop-Speed-> ${this.top_speed}`
    );
  }
}

let sportCar1 = new SportsCar("Ferrari", "spider", "red");
let sportCar2 = new SportsCar("Austin Martin", "db-1", "red");
sportCar2.top_speed = 400;
sportCar1.print();
sportCar1.printSportCar();
sportCar2.printSportCar();
