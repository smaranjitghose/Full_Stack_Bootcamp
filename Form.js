//FeedBack Form
let name = document.getElementById("name1").value
document.getElementById("FF").textContent = "Feedback Form"

document.getElementById("name1").textContent = "Name:"

document.getElementById("email1").textContent = "Email:"

document.getElementById("div1").textContent = "Division:"
document.getElementById("op1").textContent = "A"
document.getElementById("op2").textContent = "B"
document.getElementById("op3").textContent = "C"
document.getElementById("op4").textContent = "D"

document.getElementById("fd").textContent = "Feedback:"

document.getElementById("sub").textContent = "Submit"
console.log(name)
 function show(){
    document.getElementById("myP").textContent = `Thankyou for your Feedback ${name}`
 }


