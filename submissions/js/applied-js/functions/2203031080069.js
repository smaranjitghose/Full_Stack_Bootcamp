// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

// function  squareNumbers(...arr) {
//     console.log(arr.map(x => x*x))
// }
// squareNumbers(1,2,3,4)


// ----------------------------------------------------------------

// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

// function filterEvenNumbers(...arr){
//     return arr.filter(x => x%2===0);
// }
// console.log(filterEvenNumbers(1,2,3,4,5,6,7,8,9,10));


//----------------------------------------------------------------

// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

// function sumPositiveNumbers(...arr){

//     return arr.filter(x => x>0).reduce((x,y) => x + y)
// }
// console.log(sumPositiveNumbers(-40,32,-27,-14,0,12,-24,31,44));


// ----------------------------------------------------------------

// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

// o1 = {
//     'name':"Rajdeep"
// }
// o2 = {
//     'name':"Sparsh"
// }

// function getNames(...arr){
//     return arr.map(o => o.name)
// }
// console.log(getNames(o1,o2))


// ----------------------------------------------------------------

// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

// function findLongestWord(...arr){
//     return arr.reduce((x,y) => x.lenght>y.lenght?x:y);
// }
// console.log(findLongestWord("Rajdeep","Sparsh","Dev"))


