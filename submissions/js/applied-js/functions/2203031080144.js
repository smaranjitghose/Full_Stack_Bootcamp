// question 1
const squareNumbers = (arr) => arr.map(num => num * num);
console.log(squareNumbers([1, 2, 3, 4]));

// question 2
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// question 3
const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumPositiveNumbers([-1, 2, -3, 4, -5]));

//question 4
const getNames = (arr) => arr.map(obj => obj.name);
console.log(getNames([{ name: "pranjal" }, { name: "alisha" }, { name: "ankita" }]));

// question 5
const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log(findLongestWord(["espresso", "latte", "chai", "coffee"]));

