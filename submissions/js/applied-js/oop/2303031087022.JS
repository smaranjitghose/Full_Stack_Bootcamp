// Task 1

function Animal() {}
Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return "Woof!";
};

const myDog = new Dog();
console.log(myDog.speak()); 
console.log(myDog.bark());

// Task 2


function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name};`
};

try {
  const person = new Person("John", 25);
  console.log(person.greet()); 
} catch (error) {
  console.error(error.message);
}

// Task 3

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return ` Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }

  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }

  move() {
    return "The car is driving";
  }
}

const vehicle = new Vehicle("Toyota", "Camry");
const car = new Car("Honda", "Civic");

console.log(vehicle.getDetails()); 
console.log(car.getDetails()); 
console.log(car.startEngine());
console.log(car.move()); 
console.log(Vehicle.isVehicle(vehicle)); 
console.log(Vehicle.isVehicle(car)); 

// Task 4

class BankAccount {
  #balance = 0;

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be positive");
    this.balance += amount;
    return  `Updated balance is ${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
    return `Updated balance is ${this.balance}`;
  }
}

const bankAccount = new BankAccount();
console.log(bankAccount.deposit(100)); 
console.log(bankAccount.withdraw(50)); 
try {
  console.log(bankAccount.withdraw(200)); 
} catch (error) {
  console.error(error.message); 
}