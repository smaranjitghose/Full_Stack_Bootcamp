//task1
function Animal() {
    this.speak = function() {
        return 'Animal speaking';
    };
}

function Dog() {
    Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return 'Woof!';
};

let myDog = new Dog();
console.log(myDog.speak()); 
console.log(myDog.bark());  

console.log(myDog instanceof Dog); 
console.log(myDog instanceof Animal); 




//task2
function Person(name, age) {
    if (age <= 0) {
        throw new Error('Age must be a positive number');
    }
    this.name = name;
    this.age = age;

    this.greet = function() {
        return Hello, my name is ${this.name};
    };
}

try {
    let person1 = new Person('John', 30);
    console.log(person1.greet()); 

    let person2 = new Person('Jane', -5);
} catch (error) {
    console.error(error.message); 
}



//task3
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return Make: ${this.make}, Model: ${this.model};
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

//task4
class BankAccount {
    constructor() {
        this._balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && this._balance - amount >= 0) {
            this._balance -= amount;
        }
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (value >= 0) {
            this._balance = value;
        }
    }
}
let account = new BankAccount();
account.deposit(100);
console.log(account.balance); 

account.withdraw(50);
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
console.log(circle.area()); 

let rectangle = new Rectangle(4, 6);
console.log(rectangle.area()); 
Footer