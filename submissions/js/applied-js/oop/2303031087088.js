//Prototypes and Object Oriented Programming
//Task 1
//Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
//Then create another constructor Dog that inherits from Animal using prototypes.
//The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

function Animal() {}
Animal.prototype.speak = function() {
    return 'Animal speaking';};
function Dog() {
    Animal.call(this);}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; 
Dog.prototype.bark = function() {
    return 'Woof!';};
const myDog = new Dog();
console.log(myDog.speak());
console.log(myDog.bark());
console.log(myDog instanceof Dog); 
console.log(myDog instanceof Animal); 
console.log(Object.getPrototypeOf(myDog) === Dog.prototype); 
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); 

//output- Animal speaking
// Woof!
// true
// true
// true
// true

//Task 2
//i): Create a Functional Constructor
//Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
//ii): Handle Errors
//Modify the Person constructor to throw an error if the age is not a positive number.

function Person(name, age) {
  if (typeof age !== 'number' || age <= 0) {
      throw new Error('Age must be a positive number');}
  this.name = name;
  this.age = age;}
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;};
try {
  const person1 = new Person('Hani', 23);
  console.log(person1.greet()); 
  const person2 = new Person('Nancy', -25); 
  console.log(person2.greet());
} catch (error) {
  console.error(error.message); 
}

//output- Hello, my name is Hani
//Age must be a positive number

//Task 3
//i): Class Inheritance
//Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
//ii): Method Overriding in Inheritance
//Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
//iii): Static Methods in Classes
//Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle {
  constructor(make, model) {
      this.make = make;
      this.model = model;
  }
  getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
      return "The vehicle is moving";}
    static isVehicle(obj) {
      return obj instanceof Vehicle;}
}
class Car extends Vehicle {
  constructor(make, model) {
      super(make, model); }
  startEngine() {
      return "Engine started";}
  move() {
      return "The car is driving";}
}
const myVehicle = new Vehicle('Toyota', 'Camry');
console.log(myVehicle.getDetails()); 
console.log(myVehicle.move()); 
const myCar = new Car('Honda', 'Civic');
console.log(myCar.getDetails()); 
console.log(myCar.startEngine()); 
console.log(myCar.move()); 
console.log(Vehicle.isVehicle(myVehicle)); 
console.log(Vehicle.isVehicle(myCar)); 
console.log(Vehicle.isVehicle({})); 

//output- Make: Toyota, Model: Camry
//The vehicle is moving
//Make: Honda, Model: Civic
//Engine started
//The car is driving
//true
//true
//false

//Task 4
//i): Encapsulation Using Getters and Setters
//Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
//ii): Polymorphism with Method Overriding
//Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.


class BankAccount {
  constructor() {
      this._balance = 0; }
  get balance() {
      return this._balance;}
  deposit(amount) {
      if (amount > 0) {
          this._balance += amount;
          console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
      } else {
          console.log("Deposit amount must be positive.");}}
  withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
          this._balance -= amount;
          console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
      } else if (amount > this._balance) {
          console.log("Insufficient funds.");
      } else {
          console.log("Withdrawal amount must be positive.");}}
}
const myAccount = new BankAccount();
myAccount.deposit(100); 
myAccount.withdraw(50);  
console.log(myAccount.balance); 
myAccount.withdraw(100); 
class Shape {
  area() {
      return 0; 
  }
}
class Circle extends Shape {
  constructor(radius) {
      super();
      this.radius = radius;
  }
  area() {
      return Math.PI * this.radius * this.radius; 
  }}
class Rectangle extends Shape {
  constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
  }
  area() {
      return this.width * this.height; 
  }
}
const myCircle = new Circle(5);
console.log(`Circle area: ${myCircle.area()}`); 
const myRectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${myRectangle.area()}`);

//output- Deposited: $100. New balance: $100
//Withdrew: $50. New balance: $50
//50
//Insufficient funds.
//Circle area: 78.53981633974483
//Rectangle area: 24