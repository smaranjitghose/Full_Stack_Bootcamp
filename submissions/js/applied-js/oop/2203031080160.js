//Task1
function Animal() { }
Animal.prototype.speak = function () {
    return "Animal speaking";
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    return "Woof!";
};
const myDog = new Dog();
console.log(myDog.speak());
console.log(myDog.bark());
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(Dog.prototype.isPrototypeOf(myDog));
console.log(Animal.prototype.isPrototypeOf(myDog));

//Task2
1.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    };
}
const person1 = new Person("Suhani", 19);
console.log(person1.greet());
//Output: "Hello, my name is Suhani"

2.
function Person(name, age) {
    if (typeof age !== "number" || age <= 0) {
        throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    };
}
try {
    const person2 = new Person("Suhani", 19);
} catch (error) {
    console.log(error.message);
}
try {
    const person3 = new Person("Vinit", -5);
    console.log(person3.greet());
} catch (error) {
    console.log(error.message);
}
//output: Age must be a positive number

//Task3
1.
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
        return "Engine started";
    }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());
console.log(myCar.startEngine());
Output: "Make: Toyota, Model: Corolla"
// Output: "Engine started"

2.
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
}
class Car extends Vehicle {
    startEngine() {
        return "Engine started";
    }
    move() {
        return "The car is driving";
    }
}
const mCar = new Car("Ford", "Mustang");
console.log(myCar.move());
const myVehicle = new Vehicle("Generic", "Model");
console.log(myVehicle.move());
// Output: "The car is driving"
// Output: "The vehicle is moving"

3.
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
const Car = new Car("Tesla", "Model S");
console.log(Vehicle.isVehicle(myCar));
const notVehicle = { make: "Fake", model: "Object" };
console.log(Vehicle.isVehicle(notVehicle));
// Output: true 
// Output: false

//Task4
1.
class BankAccount {
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }
    get balance() {
        return this.#balance;
    }
    #setBalance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.#balance = amount;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#setBalance(this.#balance + amount);
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (this.#balance - amount < 0) {
            throw new Error("Insufficient funds");
        }
        this.#setBalance(this.#balance - amount);
    }
}
const account = new BankAccount(100);
console.log(account.balance);
account.deposit(50);
console.log(account.balance);
account.withdraw(30);
console.log(account.balance);
try {
    account.withdraw(200);
} catch (error) {
    console.log(error.message);
}
// Output: 100 
// Output: 150
// Output: 120
// Output: "Insufficient funds"

2.
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
const myCircle = new Circle(5);
console.log(myCircle.area());
const myRectangle = new Rectangle(4, 6);
console.log(myRectangle.area());
const myShape = new Shape();
console.log(myShape.area());
// Output: 78.53981633974483
// Output: 24
// Output: 0
