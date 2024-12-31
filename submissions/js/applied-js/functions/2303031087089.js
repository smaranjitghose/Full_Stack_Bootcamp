// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions
// Ans:
function squareNumbers(arr) {
    return arr.map(num => num ** 2)
  }
  
  let numbers1 = [1, 2, 3, 4, 5];
  let squaredNumbers = squareNumbers(numbers1)
  console.log(squaredNumbers)

// Q2 Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  let numbers = [1, 2, 3, 4, 5, 6];
  let evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); 

//   Q3 Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  }
  let num = [-3, 5, -2, 9, 0, -1, 7];
  let positiveSum = sumPositiveNumbers(numbers);
  console.log(positiveSum);

//   Q4 Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
function getNames(arr) {
    return arr.map(obj => obj.name);
  }
  let people = [
    { name: "Hani", age: 24 },
    { name: "Rutu", age: 21 },
    { name: "neeti", age: 21 }
  ];
  let names = getNames(people);
  console.log(names); 
//   Q5 Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
function findLongestWord(arr) {
    return arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");
  }
  
  
  let words = ["apple", "banana", "cherry", "blueberry", "strawberry"];
  let longestWord = findLongestWord(words);
  console.log(longestWord); 
  
  
  
  


  