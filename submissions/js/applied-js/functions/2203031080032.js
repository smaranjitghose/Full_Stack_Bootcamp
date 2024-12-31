// Task 1 Using Array Methods

let squareNumber = (arr) => {
    return arr.map(num => num ** 2)
}

console.log(squareNumber([1,2,3,4,5]))


// Task 2

let filterEvenNumbers = (arr) => {
    return arr.filter(num => num%2==0)
}

console.log(filterEvenNumbers([1,2,3,4,5]))


// Task 3

let sumPositiveNumbers = (arr) => {
    return arr.filter(num => num > 0).reduce((sum,num) => sum + num)
}

console.log(sumPositiveNumbers([1,2,3,4,5]))

// Task 4

let  getNames = (arr) => {
    return arr.map(obj => obj.name)
}

console.log(getNames([{name:'Darsh'},{name:'Vishang'},{name:'Dev'},{name:'Pratik'}]))

// Task 5

let findLongestWord = (arr) => {
    return arr.reduce((current, longest) => current.length > longest.length ? current: longest) 
}

console.log(findLongestWord(['Darsh','Vishang','Dev','Pratik']))