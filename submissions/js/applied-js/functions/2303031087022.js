// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

const squreNumber = (arr) => arr.map(num=>num ** 2);

const numbers =[1,2,3,4,5];
const squred = squreNumber(numbers);
console.log(squred);


// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers1);
console.log(evenNumbers); 


// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions


const sumPositiveNumbers = (arr) => 
    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

// Example usage:
const numbers2 = [-3, 1, 2, -7, 5, -1];
const sum = sumPositiveNumbers(numbers2);
console.log(sum); 


// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions


const getNames = (arr) => arr.map(obj => obj.name);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = getNames(people);
console.log(names); 


// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const findLongestWord = (arr) => 
    arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");


const words = ["apple", "banana", "cherry", "watermelon"];
const longestWord = findLongestWord(words);
console.log(longestWord); 
