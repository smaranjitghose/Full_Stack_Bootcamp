//Function_JS

//Task1
const squareNumbers = (arr) => 
{
    return arr.map(number => number * number)
}
// console.log(squareNumbers([0, 2, 4, 6]));  //Output: [0,4,16,36]

//Task2
const filterEvenNumbers = (arr) => {
    return arr.filter(number => number % 3 == 0)
}
//console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])) //Output : [3,6]

//Task3
const sumPositiveNumbers = (arr) => {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0)
}
//console.log(sumPositiveNumbers([-1, 2, 3, -4, 5]));  //Output : 10

//Task4
const getNames = (arr) => {
    return arr.map(obj => obj.name)
}
//console.log(getNames([{ name: 'Bharvi' }, { name: 'Neeti' }, { name: 'Hani' }]))  //Output : ['Bharvi','Neeti','Hani'] 

//Task5
const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, '')
// console.log(findLongestWord(['Bharvi', 'Neeti', 'Hani', ])) // Output : Bharvi
