//Prototypes and Object Oriented Programming

// Task 1: 

function Animal() {
    this.speak = function() {
      return 'Animal speaking'
    }
  }
  
function Dog() {
    Animal.call(this)
    this.bark = function() {
      return 'Woof!'
    }
}
  
let myDog = new Dog()
  
console.log(myDog.speak())
console.log(myDog.bark())
  
console.log(myDog instanceof Dog)
console.log(myDog instanceof Animal)

// Task 2:

function Person(name, age) {
    if (age <= 0 || isNaN(age)) 
    {
      throw new Error("Age must be a positive number")
    }
  
    this.name = name
    this.age = age
  
    this.greet = function() {
      return `Hello, my name is ${this.name}`
    }
}

// Task 3:

class Vehicle {
    constructor(make, model) {
      this.make = make
      this.model = model
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`
    }

    move() {
      return "The vehicle is moving"
    }

    static isVehicle(obj) {
      return obj instanceof Vehicle
    }
}
 
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model)
    }

    startEngine() {
      return "Engine started"
    }
 
    move() {
      return "The car is driving"
    }
}
  
let car = new Car("Toyota", "Corolla")
console.log(car.getDetails())
console.log(car.startEngine())
console.log(car.move())
  
let vehicle = new Vehicle("Ford", "Fusion")
console.log(vehicle.getDetails())
console.log(vehicle.move())
  
console.log(Vehicle.isVehicle(car))
console.log(Vehicle.isVehicle(vehicle))
console.log(Vehicle.isVehicle({}))

// Task 4:

// i) Encapsulation Using Getters and Setters

class BankAccount {
    #balance;
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    get balance() {
      return this.#balance;
    }
  
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount > 0 && this.#balance >= amount) this.#balance -= amount;
    }
}

let account = new BankAccount(100)
account.deposit(50)
account.withdraw(30)
console.log(account.balance)
  
// ii) Polymorphism with Method Overriding
  
class Shape {
    area() {
      return 0
    }
}
  
class Circle extends Shape {
    constructor(radius) {
      super()
      this.radius = radius
    }
  
    area() {
      return Math.PI * this.radius ** 2
    }
}
  
class Rectangle extends Shape {
    constructor(length, width) {
      super()
      this.length = length
      this.width = width
    }
  
    area() {
      return this.length * this.width
    }
}
    
let circle = new Circle(5)
console.log(circle.area())
  
let rectangle = new Rectangle(10, 5)
console.log(rectangle.area())