// Question 1
const squareNumbers=(arr)=>arr.map(num=>num*num);
const numbers1=[1,2,3,4,5];
const squared=squareNumbers(numbers1);
console.log(squared); 

//Question 2

const filterEvenNumbers=(arr)=>arr.filter(num=>num%2===0);
const numbers2=[1,2,3,4,5,6,7,8];
const evenNumbers=filterEvenNumbers(numbers2);
console.log(evenNumbers); 

// Question 3
const sumPositiveNumbers = (arr) => 
    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
const numbers = [-5, 3, 7, -2, 10, -1];
const positiveSum = sumPositiveNumbers(numbers);
console.log(positiveSum);

// Question 4 
const getNames = (arr) => arr.map(obj => obj.name);
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const names = getNames(people);
console.log(names); 

// Question 5
const findShortestWord = (arr) => 
    arr.reduce((shortest, current) => current.length > shortest.length ? current : shortest, "");
const words = ["apple", "banana", "cherry", "blueberry", "kiwi"];
const shortestWord = findSWord(words);
console.log(shortestWord);