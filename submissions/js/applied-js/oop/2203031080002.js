
//Q1. Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
//    Then create another constructor Dog that inherits from Animal using prototypes.
//    The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
function Animal() {}
Animal.prototype.speak = function() {
    return 'Animal speaking';
}

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return 'Woof!';
}
let myDog = new Dog()
console.log(myDog.speak())
console.log(myDog.bark())

//Q2. i): Create a Functional Constructor
//        Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
//   ii): Handle Errors
//        Modify the Person constructor to throw an error if the age is not a positive number.
// i.
function Person(name, age) {
    if(age <= 0){
        throw new Error("Age must be a positive integer")
    }
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
}
let person1 = new Person('Hardeep', 16)
console.log(person1.greet())

// ii.
function Person(name, age){
    if (typeof age !== 'number' || age <= 0){
        throw new Error('Age must be a positive number')
    }
    this.name = name
    this.age = age
}
Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`
}
try{
    let person1 = new Person('Hardeep', -5)
} 
catch(error){
    console.log(error.message)
}

//Q3. i): Class Inheritance
//        Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
//   ii): Method Overriding in Inheritance
//        Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
//  iii): Static Methods in Classes
//        Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
// i. 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}
class Car extends Vehicle {
    startEngine() {
        return 'Engine started';
    }
}
let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails())
console.log(myCar.startEngine())

// ii. 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    move() {
        return 'The vehicle is moving';
    }
}
class Car extends Vehicle {
    move() {
        return 'The car is driving';
    }
}
let vehicle = new Vehicle('Generic', 'Model')
console.log(vehicle.move())
let car = new Car('Honda', 'Civic')
console.log(car.move())

// iii. 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}
let myVehicle = new Vehicle('Ford', 'F-150')
console.log(Vehicle.isVehicle(myVehicle))
console.log(Vehicle.isVehicle({}))


//Q4. i): Encapsulation Using Getters and Setters
//        Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
//   ii): Polymorphism with Method Overriding
//        Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

// i.
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance > 0 ? initialBalance : 0;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
        }
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        }
    }
}
let account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.balance);

// ii.
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
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
let circle = new Circle(10)
console.log(circle.area())
let rectangle = new Rectangle(5, 10)
console.log(rectangle.area())