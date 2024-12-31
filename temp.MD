```javascript

let genPass = () =>{
let smallLetters = "abcdefghijklmnopqrstuvwxyz"
let bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456"
let special = "!@#$%^&*"

let block = smallLetters + bigLetters + numbers + special
// console.log(block)

let n = 14
let pass = ""
for(let i = 1; i<=14;i++){
    pass = pass + block.charAt(Math.random()*block.length +1)
}
console.log(pass)
}

```
