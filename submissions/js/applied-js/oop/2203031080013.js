//Prototypes and Object Oriented Programming

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
console.log(myDog.speak()); // Output: 'Animal speaking'
console.log(myDog.bark()); // Output: 'Woof!'

// Task 2
function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
}
 
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

try {
  const person = new Person("Vaishnavi", 22);
  console.log(person.greet()); // Output: 'Hello, my name is Vaishnavi'
} catch (error) {
  console.error(error.message);
}

// Task 3
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }

  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  Vehicle.prototype.move = function() {
    return 'The vehicle is moving';
  }

  Vehicle.isVehicle = function(obj) {
    return obj instanceof Vehicle;
  }

  class Car extends
  Vehicle {
    startEngine() {
      return 'Engine started';
    }

    move() {
      return 'The car is driving';
    }
  }

  let vehicle = new Vehicle('Toyota', 'Corolla');
  let car = new Car('Honda', 'Civic');

  console.log(vehicle.getDetails()); // Make: Toyota, Model: Corolla
  console.log(vehicle.move()); // The vehicle is moving
  console.log(Vehicle.isVehicle(vehicle)); // true

  console.log(car.getDetails()); // Make: Honda, Model: Civic
  console.log(car.move()); // The car is driving
  console.log(Vehicle.isVehicle(car)); // true    
  console.log(Car.isVehicle(vehicle)); // false
  console.log(Car.isVehicle(car)); // true



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
    return `balance : ${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
    return `balance : ${this.balance}`;
  }
}

const bankAccount = new BankAccount();
console.log(bankAccount.deposit(100)); // Output: 'balance :100'
console.log(bankAccount.withdraw(50)); // Output: 'balance : 50'
try {
  console.log(bankAccount.withdraw(200)); 
} catch (error) {
  console.error(error.message); // Output: 'Insufficient balance'
}