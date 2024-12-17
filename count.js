let value = document.getElementById("value")
let count = 0


function more(){
    count += 1
    value.textContent = count
}

function less(){
    count -= 1
    value.textContent = count
}

function reset(){
    count = 0
    value.textContent = count
}