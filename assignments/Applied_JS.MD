
# Prototypes and Object Oriented Programming

### Task 1

- Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
- Then create another constructor Dog that inherits from Animal using prototypes.
- The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.


### Task 2

i): Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



ii): Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.


### Task 3


i): Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

ii): Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".


iii): Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.


### Task 4

i): Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.


ii): Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

