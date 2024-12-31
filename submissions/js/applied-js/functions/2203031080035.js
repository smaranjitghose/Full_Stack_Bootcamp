//Task 1: Using Array Methods

function squareNumbers(arr){
    return arr.map(num => num ** 2)
}

let numbers1 = [1, 2, 3, 4, 5]
console.log(squareNumbers(numbers1))

//Task 2: Custom Filter Function

function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 == 0)
}

let numbers2 = [1, 2, 3, 4, 5, 6]
console.log(filterEvenNumbers(numbers2))

//Task 3: Sum of Positive Numbers

function sumPositiveNumbers(arr){
    return arr.filter(num => num > 0).reduce((sum = 0, num) => sum + num)
}

let numbers3 = [1, -2, 3, 4]
console.log(sumPositiveNumbers(numbers3 ))

// Task 4: Transform Array of Objects

function getNames(arr) {
    return arr.map(obj => obj.name)
}

let people = [{name: 'vishang'},{name: 'dev'},{name: 'darsh'}]
console.log(getNames(people))

// Task 5: Find the Longest Word

function findLongestWord(arr){
    return arr.reduce((current, longest) => current.length > longest.length ? current : longest)
}

let string = ['darsh', 'Hardeep', 'Vishang', 'sparsh']
console.log(findLongestWord(string))