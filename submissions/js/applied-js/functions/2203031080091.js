let squareNumbers = (...arr) =>{

    console.log(arr.map(num => num * num));
}

squareNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Create a function filterEvenNumbers(arr) using filter() and arrow functions

let filterEvenNumbers = (...arr) => {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions


let sumPositiveNumbers = (...arr) => {
    let pos =  arr.filter(num => num > 0)

    return pos.reduce((total,num) => total+num,0);
}

console.log(sumPositiveNumbers(1, -2, 3, -4, 5, -6, 7, -8, 9, -10));


// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

obj1 ={
    'name': 'deep'
};

obj2 ={
    'name': 'raj'
};
let getNames = (...arr) =>{
    return arr.map(obj => obj.name);
}

console.log(getNames(obj1, obj2));


// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

const findLongestWord = (...arr) => {
    return arr.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

console.log(findLongestWord('yash', 'jenish', 'deep', 'risabh', 'pavan'));