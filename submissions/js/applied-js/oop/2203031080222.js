// Task1
function Animal() {}
Animal.prototype.speak = function () {
  return "Animal speaking";
};
function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    return "Woof!";
};
let myDog = new Dog("Buddy");
console.log(myDog.speak());
console.log(myDog.bark());

// Task2
function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Heyy, My name is ${this.name}`;
};

try {
  const person = new Person("Vrushangi", 20);
  console.log(person.greet()); 
} catch (error) {
  console.error(error.message);
}


// Task3
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
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

//   Task4
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
      return `Updated balance is ${this.balance}`;
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
  console.log(bankAccount.deposit(500)); 
  console.log(bankAccount.withdraw(300)); 
  try {
    console.log(bankAccount.withdraw(400)); 
  } catch (error) {
    console.error(error.message); 
  }