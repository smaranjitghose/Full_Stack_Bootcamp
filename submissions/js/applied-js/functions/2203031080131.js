
//Task 1: Using Array Methods
let squareNumbers = (arr) =>{

    return arr.map(arr => arr*arr)
}


console.log(squareNumbers([1,2,3,4,5]))


// Task 2: Custom Filter Function
let filterEvenNumbers = (arr) => {
    return arr.filter(arr => arr%2==0)
}

console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]))

//Task 3: Sum of Positive Numbers
let sumPositiveNumbers = (arr) => {
    let sum=0
    return arr.filter(arr=>arr>0).reduce((arr,sum)=>sum+arr)
}

console.log(sumPositiveNumbers([1,2,-1,5,-7,6]))

//Task 4: Transform Array of Objects

let getNames=(arr) => {
    return arr.map(arr => arr.name )
} 

let obj =[{name:"Vignesh"},{name:"Harsh"},{name:"Dev"},
    {
        name:"Harshit"
    },
    {
        name:"Sahil"
    },
    {
        name:"Meril"
    },
    {
        name:"Sujal"
    }
]

console.log(getNames(obj))


//Task 5: Find the Longest Word
let findLongestWord=(arr)=>{
    let longest=0
    return arr.reduce((arr,longest)=>longest=longest.length<arr.length?arr:longest)
}


let obj2 =["Vignesh","Harsh","Dev","Sahil","Meril","Sujal"];

console.log(findLongestWord(obj2))