//Function_JS

//Task1
const squareNumbers = (arr) => 
    {
        return arr.map(number => number * number)
    }
    // console.log(squareNumbers([0, 2, 4, 6]));  //Output: [0,4,16,36]
    
    //Task2
    const filterEvenNumbers = (arr) => {
        return arr.filter(number => number % 3 == 0)
    }
    //console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])) //Output : [3,6]
    
    //Task3
    const sumPositiveNumbers = (arr) => {
        return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0)
    }
    //console.log(sumPositiveNumbers([-1, 2, 3, -4, 5]));  //Output : 10
    
    //Task4
    const getNames = (arr) => {
        return arr.map(obj => obj.name)
    }
    //console.log(getNames([{ name: 'Bharvi' }, { name: 'Neeti' }, { name: 'Hani' }]))  //Output : ['Bharvi','Neeti','Hani'] 
    
    //Task5
    const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, '')
    // console.log(findLongestWord(['Bharvi', 'Neeti', 'Hani', ])) // Output : Bharvi
    
    
    
    
    
    // Prototypes and Object Oriented Programming
    // Task 1
    
    function Animal() {}
    
    Animal.prototype.speak = function () {
        return 'Animal speaking...';
    };
    
    function Dog() {}
    
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    
    Dog.prototype.bark = function () {
        return 'Woof!!!!';
    };
    
    const dog = new Dog();
    //console.log(dog.speak());   // Output: Animal speaking...
    //console.log(dog.bark());   // Output: Woof!!!!
    
    
    //Task2
    // Functional constructor for Person
    function Person(name, age) {
        if (age <= 0) {
            throw new Error('Age must be a positive number')
        }
        this.name = name
        this.age = age
    }
    Person.prototype.greet = function() {
        return `Hello, my name is ${this.name}`
    }
    try {
        const person1 = new Person('Bharvi', 20)
        console.log(person1.greet()) // Output: "Hello, my name is Bharvi"
        
        const person2 = new Person('Riya', -16)
    } catch (error) {
        console.error(error.message) // Output: "Age must be a positive number"
    }
    
    //Task3 
    //Task3-i)
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
            return 'Engine started smoothly!';
        }
    }
    
    const car = new Car('Toyota', 'Corolla');
    //console.log(car.getDetails()); // Output: Make: Toyota, Model: Corolla
    //console.log(car.startEngine()); // Output: Engine started smoothly!
    
    // Task 3 ii)
    class Vehicle {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
    
        getDetails() {
            return `Make: ${this.make}, Model: ${this.model}`;
        }
    
        move() {
            return 'The vehicle is moving slowlyy';
        }
    }
    
    class Car extends Vehicle {
        move() {
            return 'The car is driving fastlyy';
        }
    }
    
    const Car = new Car('Honda', 'Civic');
    //console.log(car.move()); // Output: The car is driving fastlyy
    
    
    // Task 3 iii)
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
        move() {
            return 'The car is driving';
        }
    }
    
    const Car = new Car('Ford', 'Focus');
    console.log(Vehicle.isVehicle(car)); // Output: true
    
    const notVehicle = {};
    console.log(Vehicle.isVehicle(notVehicle)); // Output: false
    
    
    //Task4-i)
    
    class BankAccount {
        // Private property (conventionally prefixed with '_')
        #balance = 0;
    
        constructor(initialBalance) {
            if (initialBalance < 0) {
                throw new Error("Initial balance cannot be negative");
            }
            this.#balance = initialBalance;
        }
    
        // Getter for balance
        get balance() {
            return this.#balance;
        }
    
        // Setter for balance with validation
        set balance(amount) {
            if (amount < 0) {
                throw new Error("Balance cannot be negative");
            }
            this.#balance = amount;
        }
    
        // Deposit method
        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Deposit amount must be greater than zero");
            }
            this.#balance += amount;
        }
    
        // Withdraw method
        withdraw(amount) {
            if (amount <= 0) {
                throw new Error("Withdraw amount must be greater than zero");
            }
            if (amount > this.#balance) {
                throw new Error("Insufficient funds");
            }
            this.#balance -= amount;
        }
    }
    
    const account = new BankAccount(100);
    account.deposit(50);
    console.log(account.balance); // Output: 150
    
    account.withdraw(30);
    console.log(account.balance); // Output: 120
    
    try {
        account.withdraw(200);
    } catch (error) {
        console.error(error.message); // Output: Insufficient funds
    }
    
    //Task4-ii)
    
    // Base class Shape
    class Shape {
        area() {
            return 0;
        }
    }
    
    // Subclass Circle
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
    
        
        area() {
            return Math.PI * this.radius * this.radius;
        }
    }
    
    // Subclass Rectangle
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
    console.log(circle.area()); // Output: 78.53981633974483 
    
    const rectangle = new Rectangle(4, 7);
    console.log(rectangle.area()); // Output: 28 
    
    const shape = new Shape();
    console.log(shape.area()); // Output: 0 
    
    