// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

function squareNumbers(input) {
    return input.map((num) => num * num);
  }
  
  input = [1, 2, 3, 4, 5];
  console.log(squareNumbers(input));
  
  
  
  
  
  // Task 2: Custom Filter Function
  // Create a function filterEvenNumbers(arr) using filter() and arrow functions
  
  function filterEvenNumbers(arr){
      return arr.filter((num)=> num % 2 === 0);
  }
  
  input = [1, 2, 3, 4, 5];
  console.log(filterEvenNumbers(input));
  
  
  
  
  
  // Task 3: Sum of Positive Numbers
  // Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
  
  function sumPositiveNumbers(arr){
      return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
  }
  
  input = [1, -2, 3, -4, 5];
  console.log(sumPositiveNumbers(input));
  
  
  
  
  
  // Task 4: Transform Array of Objects
  // Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
  
  function getNames(arr){
      return arr.map((obj) => obj.name);
  }
  
  input = [{name: 'John'}, {name: 'Jane'}, {name: 'Jack'}];
  console.log(getNames(input));
  
  
  
  
  
  // Task 5: Find the Longest Word
  // Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
  
  function findLongestWord(arr){   
      return arr.reduce((acc, word) => word.length > acc.length ? word : acc, '');
  }
  
  input = ['apple', 'banana', 'cherry', 'orange', 'elderberry'];
  console.log(findLongestWord(input));
  