// Prototypes and Object Oriented Programming
// Task 1
function Animal() {
    this.type = 'Animal';
  }
  
  Animal.prototype.speak = function() {
    return 'Animal speaking';
  };
  function Dog() {
    Animal.call(this); 
    this.type = 'Dog';
  }
  
  Dog.prototype = Object.create(Animal.prototype); 
  Dog.prototype.constructor = Dog;
  
  
  Dog.prototype.bark = function() {
    return 'Woof!';
  };
  
  const dog = new Dog();
  console.log(dog.speak()); 
  console.log(dog.bark());   
  
  console.log(dog instanceof Dog);  
  console.log(dog instanceof Animal);
// output
// Animal speaking
// Woof!
// true
// true

// Task 2
function Person(name, age) {
    if (typeof age !== 'number' || age <= 0) {
      throw new Error('Age must be a positive number');
    }
    
    this.name = name;
    this.age = age;

    this.greet = function() {
      return `Hello, my name is ${this.name}`;
    };
  }
  
  try {
    const person1 = new Person('Vinit', 20);
    console.log(person1.greet()); 
    
    const person2 = new Person('Suhani', -3);
    console.log(person2.greet()); 
  } catch (error) {
    console.error(error.message);
  }
  //Output
// Hello, my name is Vinit
// Age must be a positive number
  
// Task 3
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
      return 'The vehicle is moving';
    }
  
    static isVehicle(obj) {
      return obj instanceof Vehicle;
    }
  }
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);  
    }

    startEngine() {
      return 'Engine started';
    }
  
    move() {
      return 'The car is driving';
    }
  }
  
  const vehicle = new Vehicle('Toyota', 'Camry');
  console.log(vehicle.getDetails());  
  console.log(vehicle.move());      
  
  const car = new Car('Honda', 'Civic');
  console.log(car.getDetails());     
  console.log(car.startEngine());    
  console.log(car.move());           
  
  console.log(Vehicle.isVehicle(vehicle)); 
  console.log(Vehicle.isVehicle(car));      
  console.log(Vehicle.isVehicle({}));       
// Output
// Make: Toyota, Model: Camry
// The vehicle is moving
// Make: Honda, Model: Civic
// Engine started
// The car is driving
// true
// true
// false
  
// Task 4
class BankAccount {
    constructor(initialBalance = 0) {
      this._balance = initialBalance;  
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(amount) {
      if (amount < 0) {
        console.log('Balance cannot be negative');
      } else {
        this._balance = amount;
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
      } else {
        console.log('Deposit amount must be positive');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log('Invalid withdrawal amount');
      }
    }
  }

  const account = new BankAccount(100);
  console.log(account.balance);
  account.deposit(50);
  console.log(account.balance);  
  account.withdraw(30);
  console.log(account.balance); 
  account.balance = -50;         
  console.log(account.balance);  
  
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
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
      super(); 
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.area());  
  
  const rectangle = new Rectangle(4, 6);
  console.log(rectangle.area()); 
// Output
// 150
// 120
// Balance cannot be negative
// 120
// 78.53981633974483
// 24

  