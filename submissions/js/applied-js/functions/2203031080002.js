// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

const squareNumbers = (arr) => arr.map(num => num ** 2);
const arr = [1, 2, 3, 4, 5];
const answer = squareNumbers(arr)
console.log(answer); 


// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

const filterEvenNumbers=(arr)=>(
    arr.filter(num=> num%2==0)
)

let array=[1,2,4,3,56,6];
console.log(filterEvenNumbers(array))


// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

const sumPositiveNumbers = (arr) =>(

    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0)

)

const numbers = [-1, 2, -3, 4, 5];
const sum = sumPositiveNumbers(numbers);
console.log(sum); 

// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

const people = [
    { name: "utsav", age: 20},
    { name: "shubham", age: 21 },
    { name: "yash", age: 20 }
];

const getNames=(arr)=> arr.map(nam=>nam.name);

console.log(getNames(people))


// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const findLongestWord = (arr) => 
    arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");


const words = ["utasv", "yash", "shubham", "jenish"];
const longestWord = findLongestWord(words);
console.log(longestWord); 
