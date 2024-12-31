// Task 1: Using Array Methods
let squareNumber=(arr)=>{
  return arr.map(arr=>arr*arr)
}

console.log(squareNumber([1,2,3,4]));

// Task 2: Custom Filter Function
let filterEvenNumber=(arr)=>{
  return arr.filter(arr=>arr%2===0)
}
console.log(filterEvenNumber([1,2,3,4,5,6,,7,8]));

//Task 3: Sum of Positive Numbers
let sumPositiveNumber=(arr)=>{
 
  return arr.filter(arr=>arr>0).reduce((arr,sum)=>arr+sum)
}
console.log(sumPositiveNumber([1,2,3,4,-1,-2,-3,4]));
//Task 4: Transform Array of Objects
let getNames=(arr)=> {
return arr.map(arr=>arr.name)
}
const obj=[
  {
    name:"harsh",
    roll:220
    
  },
  {
    name:"vignesh",
    roll:220
  },
  {
    name:"Dev",
    roll:220
  },
  {
    name:"Harshit",
    roll:220
  },


]
console.log(getNames(obj));

//Task 5: Find the Longest Word
let findLongestWord=(arr)=>{
 
   return arr.reduce((arr,count)=>count=count.length<arr.length?arr:count)
}
let str=["harsh","dev","smaranjt","sahil"]
console.log(findLongestWord(str))