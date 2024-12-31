//Function

//Task 1
const squareNumbers = (arr) => arr.map(n => n ** 2);
console.log(squareNumbers([1,2,3,4,5]))
//Output:[1,4,9,16,25]


//Task 2
const filterEvenNumbers = (arr) => arr.filter(n => n% 2 === 0);
console.log(filterEvenNumbers([1,2,3,4,5]))
//output:[2,4]


//Task 3
const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumPositiveNumbers([-1, -2, 3, 4, 5]));
//output:12


//Task 4
const getNames = (arr) => arr.map(obj => obj.name);
const names = [{ name: "Vaishnavi" }, { name: "Khushi" }, { name: "Mansha" }];
console.log(getNames(names));
 // Output: ["Vaishnavi", "khushi", "Mansha"]


//Task 5
 const findLongestWord = arr => arr.reduce((a, b) => b.length > a.length ? b : a, "");
 console.log(findLongestWord(["Sagariyavaishnavi", "Khushisagar", "Mashasoni"]));
 //output: Sagariyavaishnavi