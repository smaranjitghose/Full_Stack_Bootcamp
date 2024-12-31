// Task 1
const squareNumbers = (arr) => arr.map(num => num * num);
const number = [1, 2, 3, 4, 5];
const squared = squareNumbers(number);
console.log(squared);
// Output: [1, 4, 9, 16, 25]

// Task 2
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]

// Task 3
const sumPositiveNumbers = (arr) => 
    arr.filter(num => num > 0) 
       .reduce((sum, num) => sum + num, 0);  
  
  const num = [-1, 2, 3, -4, 5, -6, 7, 8, -9];
  
  const sum = sumPositiveNumbers(num);
  console.log(sum); 
// Output: 25

// Task 4
const getNames = (arr) => arr.map(obj => obj.name);

const people = [
  { name: 'Vinit', age: 20 },
  { name: 'Suhani', age: 18 },
  { name: 'Mansha', age: 19 },
  { name: 'Vaishnavi', age: 21 }
];
const names = getNames(people);
console.log(names);
// Output: [ 'Vinit', 'Suhani', 'Mansha', 'Vaishnavi' ]

// Task 5
const findLongestWord = (arr) => 
    arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
  const words = ['apple', 'banana', 'grapefruit', 'kiwi', 'watermelon'];
  
  const longestWord = findLongestWord(words);
  
  console.log(longestWord);
//  Output: 'grapefruit'
  

  
