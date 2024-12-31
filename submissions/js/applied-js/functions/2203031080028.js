// Task 1: Using Array Methods
function squareNumbers(input) {
  return input.map((num) => num * num);
}
input = [1, 2, 3, 4, 5];
console.log(squareNumbers(input));

// Task 2: Custom Filter Function
function filterEvenNumbers(arr){
    return arr.filter((num)=> num % 2 === 0);
}
input = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(input));

// Task 3: Sum of Positive Numbers
function sumPositiveNumbers(arr){
    return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}
input = [1, -2, 3, -4, 5];
console.log(sumPositiveNumbers(input));

// Task 4: Transform Array of Objects
function getNames(arr){
    return arr.map((obj) => obj.name);
}
input = [{name: 'John'}, {name: 'Jane'}, {name: 'Jack'}];
console.log(getNames(input));

// Task 5: Find the Longest Word
function findLongestWord(arr){   
    return arr.reduce((acc, word) => word.length > acc.length ? word : acc, '');
}
input = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(findLongestWord(input));