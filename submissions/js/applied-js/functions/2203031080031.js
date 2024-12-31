// Q1 Write a function squareNumbers(arr) using map() and arrow functions
let squareNumbers = (arr) => {
    return arr.map(num => num ** 2);
}
console.log(squareNumbers([1,2,3,4,5,6]))


// Q2 Create a function filterEvenNumbers(arr) using filter() and arrow functions
let filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1,2,3,4]))

// Q3 Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
let sumPositiveNumbers = (arr) => {
    return arr.filter(num => num > 0).reduce((sum=0, num) => sum + num);
}
console.log(sumPositiveNumbers([1,2,3,4,5,-1,-5,-6]))

//Q4 Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
let getNames = (arr) => {
    return arr.map(obj => obj.name)
}
arr = [{name : "Hardeep"}, {name:"Dev"}]
console.log(getNames(arr))

//Q5 Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
let findLongestWord = (arr) => {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
arr = ["Hardeep", "Dev", "Darsh", "Vishu"]
console.log(findLongestWord(arr))