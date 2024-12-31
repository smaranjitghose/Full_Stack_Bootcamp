// Task 1: Prototype Inheritance
function Animal() {}
Animal.prototype.speak = function() {
    return 'Animal speaking';
};

function Dog() {} // for the dog class
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return 'Woof!';
};

// Demonstration
const dog = new Dog();
console.log(dog.speak()); // Animal speaking
console.log(dog.bark()); // for the Woof!
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// Task 2: Functional Constructor
// i) Create Functional Constructor
function Person(name, age) {
    if (age <= 0) {
        throw new Error('Age must be a positive number.');
    }
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

// ii) Handle Errors
try {
    const person = new Person('John', 25);
    console.log(person.greet()); // Hello, my name is John
} catch (error) {
    console.error(error.message);
}

try {
    const invalidPerson = new Person('Jane', -5);
} catch (error) {
    console.error(error.message); // Age must be a positive number.
}

// Task 3: Class Inheritance
// i) Class Inheritance
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
    startEngine() {
        return 'Engine started';
    }

    // ii) Method Overriding
    move() {
        return 'The car is driving';
    }
}

// Demonstration
const car = new Car('Toyota', 'Corolla');
console.log(car.getDetails()); // Make: Toyota, Model: Corolla
console.log(car.startEngine()); // Engine started
console.log(car.move()); // The car is driving
console.log(Vehicle.isVehicle(car)); // true
console.log(Vehicle.isVehicle({})); // false

// Task 4: Encapsulation Using Getters and Setters
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            throw new Error('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error('Insufficient funds.');
        } else if (amount <= 0) {
            throw new Error('Withdraw amount must be positive.');
        } else {
            this.#balance -= amount;
        }
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.balance); // 100
account.withdraw(50);
console.log(account.balance); // 50

// Task 4: Polymorphism with Method Overriding
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

// Demonstration
const circle = new Circle(5);
console.log(circle.area()); // 78.53981633974483

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area()); // 200
