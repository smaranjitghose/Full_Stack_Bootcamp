// Task 1
// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

function Animal() {
    this.speak = function() {
      return 'Animal speaking';
    }
  }   
  
  function Dog() {
    this.bark = function() {
      return 'Woof!';
    }
  }
  
  Dog.prototype = new Animal();
  
  let dog = new Dog();
  
  console.log(dog.speak()); // Animal speaking
  console.log(dog.bark()); // Woof!
  
  
  
  
  
  // Task 2
  // i): Create a Functional Constructor
  
  // Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
  
  // ii): Handle Errors
  
  // Modify the Person constructor to throw an error if the age is not a positive number.
  
  function Person(name, age) {
    if (age <= 0) {
      throw new Error('Age must be a positive number');
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
  let person = new Person('John', 30);
  console.log(person.greet()); // Hello, my name is John
  
  // let person = new Person('John', -30); // Error: Age must be a positive number
  // console.log(person.greet());
  
  
  
  
  
  // Task 3
  // i): Class Inheritance
  
  // Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
  
  // ii): Method Overriding in Inheritance
  
  // Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
  
  // iii): Static Methods in Classes
  
  // Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
  
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
  
  
  
  
  
  // i): Encapsulation Using Getters and Setters
  
  // Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
  
  // ii): Polymorphism with Method Overriding
  
  // Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
  
  
  class BankAccount {
    constructor() {
      this._balance = 0;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && this._balance >= amount) {
        this._balance -= amount;
      }
    }
  }
  
  let account = new BankAccount();
  account.deposit(100);
  console.log(account.balance); // 100
  account.withdraw(50);
  console.log(account.balance); // 50
  account.withdraw(100);
  console.log(account.balance); // 50
  
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
          return Math.PI * this.radius ** 2;
      }
  }
  
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
  
  let circle = new Circle(5);
  let rectangle = new Rectangle(4, 6);
  
  console.log(circle.area()); // 78.54
  console.log(rectangle.area()); // 24
  
  
  
  
  
  