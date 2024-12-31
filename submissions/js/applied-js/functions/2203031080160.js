// Task 1
const squareNumbers = (arr) => arr.map(num => num * num);
const numbers = [1, 2, 3, 4, 5];
const squared = squareNumbers(numbers);
console.log(squared);

// Task 2
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// Task 3
const sumPositiveNumbers = (arr) =>
  arr.filter(num => num > 0)
    .reduce((sum, num) => sum + num, 0);

const numb = [-1, 2, 3, -4, 5, -6, 7, 8, -9];

const sum = sumPositiveNumbers(numbers);
console.log(sum);

//Task 4
const getNames = (arr) => arr.map(obj => obj.name);

const people = [
  { name: 'Vinit', age: 20 },
  { name: 'Suhani', age: 18 },
  { name: 'Mansha', age: 19 },
  { name: 'Vaishnavi', age: 21 }
];
const names = getNames(people);
console.log(names);

//Task 5
const findLongestWord = (arr) =>
  arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
const words = ['apple', 'banana', 'grapefruit', 'kiwi', 'watermelon'];

const longestWord = findLongestWord(words);

console.log(longestWord);
