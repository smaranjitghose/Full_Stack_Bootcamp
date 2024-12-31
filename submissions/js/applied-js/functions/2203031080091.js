let squareNumbers = (...arr) =>{

    console.log(arr.map(num => num * num));
}

squareNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Create a function filterEvenNumbers(arr) using filter() and arrow functions

let filterEvenNumbers = (...arr) => {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions


let sumPositiveNumbers = (...arr) => {
    let pos =  arr.filter(num => num > 0)

    return pos.reduce((total,num) => total+num,0);
}

console.log(sumPositiveNumbers(1, -2, 3, -4, 5, -6, 7, -8, 9, -10));


// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

obj1 ={
    'name': 'deep'
};

obj2 ={
    'name': 'raj'
};
let getNames = (...arr) =>{
    return arr.map(obj => obj.name);
}

console.log(getNames(obj1, obj2));


// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const findLongestWord = (...arr) => {
    return arr.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

console.log(findLongestWord('yash', 'jenish', 'deep', 'risabh', 'umang'));

// Task 1
//Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
//Then create another constructor Dog that inherits from Animal using prototypes.
//The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

console.log("\n+++++++++++Task 1+++++++++++\n");

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
// i): Create a Functional Constructor
// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
// ii): Handle Errors
// Modify the Person constructor to throw an error if the age is not a positive number.

console.log("\n+++++++++++Task 2+++++++++++\n");

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
  const person = new Person("John", 25);
  console.log(person.greet()); // Output: 'Hello, my name is John'
} catch (error) {
  console.error(error.message);
}

// Task 3
// i): Class Inheritance
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
// ii): Method Overriding in Inheritance
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
// iii): Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

console.log("\n+++++++++++Task 3+++++++++++\n");

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

console.log(vehicle.getDetails()); // Output: 'Make: Toyota, Model: Camry'
console.log(car.getDetails()); // Output: 'Make: Honda, Model: Civic'
console.log(car.startEngine()); // Output: 'Engine started'
console.log(car.move()); // Output: 'The car is driving'
console.log(Vehicle.isVehicle(vehicle)); // Output: true
console.log(Vehicle.isVehicle(car)); // Output: true

// Task 4
// i): Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
// ii): Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

console.log("\n+++++++++++Task 4+++++++++++\n");

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
console.log(bankAccount.deposit(100)); // Output: 'Updated balance is 100'
console.log(bankAccount.withdraw(50)); // Output: 'Updated balance is 50'
try {
  console.log(bankAccount.withdraw(200)); // Throws error
} catch (error) {
  console.error(error.message); // Output: 'Insufficient balance'
}