// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions
let squareNumbers = (arr) => {
    return arr.map(arr=>arr*arr)
}
console.log(squareNumbers([1,2,3,4,5]))


// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions
let filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 == 0)
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]))


// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
let sumPositiveNumbers = (arr) => {
    let sum = 0
    return arr.filter(arr=>arr>0).reduce((arr,sum) => sum+arr)
}
console.log(sumPositiveNumbers([1,2,3,-5,-4,8]))


// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
let getNames = (arr) => {
    return arr.map(arr=>arr.name)
}

let obj =[
    {name:"John"},
    {name:"Jane"},
    {name:"Alice"},
    {name:"sahil"}
]
console.log(getNames(obj))



// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
let findLongestWord = (arr)=>{
    let longest = 0
    return arr.reduce((arr,longest) => longest = longest.length< arr.length?arr:longest)
}
let obj2 =["sahil","vignesh","satyam","harsh","harshit"]
console.log(findLongestWord(obj2))