// question1
const squareNumbers = (arr) => arr.map(num => num * num);

// question2
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// question3
const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

// question4
const getNames = (arr) => arr.map(obj => obj.name);

// question5
const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");

// Test cases
console.log(squareNumbers([2,3 ,4 ,5 ])); 
console.log(filterEvenNumbers([1, 6, 3, 2, 5, 7])); 
console.log(sumPositiveNumbers([-1, 2, -3, 2, -5,-1]));
console.log(getNames([{ name: "Alisha" }, { name: "pranjal" }, { name: "gauri" }])); 
console.log(findLongestWord(["pineapple", "grape", "cherry", "strawberry"])); 