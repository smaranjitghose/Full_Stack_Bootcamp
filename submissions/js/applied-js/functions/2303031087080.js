// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

function squareNumbers(arr) {
    return arr.map(num => num **2)}
let nums = [2,4,6,8]
let Squared = squareNumbers(nums)
console.log(Squared)

// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 == 0)}
let numb = [2,3,6,9]
let even = filterEvenNumbers(numb)
console.log(even)

// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0)}
let numbers = [1,2,-2,-3,4]
let positiveSum = sumPositiveNumbers(numbers)
console.log(positiveSum)

// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

function getNames(arr){
    return arr.map(obj => obj.name)}
let names = [ { name: "Neeti", age: 20 },
    { name: "Hani", age: 23 },
    { name: "Rutuja", age: 21 } ]
  let persons = getNames(names)
  console.log(persons)

// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

function findLongestWord(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");}
let words = ["psychology", "Neeti", "watermelon"];
let longestWord = findLongestWord(words);
console.log(longestWord)

