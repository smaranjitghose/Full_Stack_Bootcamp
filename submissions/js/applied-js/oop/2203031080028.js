// Task 1
function Animal() {}
Animal.prototype.speak = function() {
    return 'Animal speaking';
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    return 'Woof!';
};

const dog = new Dog();
console.log(dog.speak());
console.log(dog.bark());

// Task 2.1
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

const person1 = new Person('John', 30);
console.log(person1.greet());


// Task 2.2
function Person(name, age) {
    if (age <= 0) {
        throw new Error('Age must be a positive number');
    }
    this.name = name;
    this.age = age;

    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

try {
    const person2 = new Person('Alice', -5);
} catch (error) {
    console.log(error.message);
}


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
}

class Car extends Vehicle {
    startEngine() {
        return 'Engine started';
    }
    move() {
        return 'The car is driving';
    }
}

Vehicle.isVehicle = function(obj) {
    return obj instanceof Vehicle;
};

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails()); 
console.log(myCar.startEngine()); 
console.log(myCar.move()); 

console.log(Vehicle.isVehicle(myCar)); 

// Task 4.1
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
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

const account = new BankAccount();
account.deposit(100);
console.log(account.balance);
account.withdraw(50);
console.log(account.balance);


// Task 4.2
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
        return Math.PI * Math.pow(this.radius, 2);
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

const circle = new Circle(5);
console.log(circle.area());

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area());