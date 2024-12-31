// Task1
let squareNumbers = (arr) => 
{
    return arr.map(arr => arr*arr)
}
console.log(squareNumbers([1,2,3,4,5]))

// Task2
let  filterEvenNumbers = (arr) =>
    {
        return arr.filter(arr => arr%2==0)
    }
    console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]))
    
// Task3
let sumPositiveNumbers = (arr) =>
    {
        let sum = 0;
        return arr.filter(arr => arr>0).reduce((arr,sum) =>sum+arr)
    }
console.log(sumPositiveNumbers([1,2,3,4,5,6,7,8,9,10]))
    
//Task4
let getNames = (arr) =>{
    return arr.map(arr=> arr.name)
    }
    let object = [
        {name : "Vrushangi"},
        {name : "Ankita"},
        {name : "Jiya"}
    ]
console.log(getNames(object))
    
//Task5
let findLongestWord = (arr) =>{
    let longest =0
    return arr.reduce((arr,longest) =>longest = longest.length<arr.length?arr:longest)
    }
let obj = ["Vrushangi", "Ankita","Jiya"]
console.log(findLongestWord(obj))