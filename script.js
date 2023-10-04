const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operate")
const equal = document.querySelector(".equal")

// HOW IT WORKS:
// When numbers click, store values at displayValue
// When an operator is clicked, move value to leftHandSide and fill in operator array
// When number clicked again, store value at displayValue
// When = is clicked, move value to rightHandSide and then 
// run operate function using leftHandSide, operator and rightHandSide arrays
// Clear all arrays and then push operate results to displayValue for repeats

let leftHandSide = []
let operator = []
let rightHandSide = []
let displayValue = []

numbers.forEach((x) => {
    x.addEventListener("click", () => {
        display.innerHTML += x.innerHTML
        displayValue.push(x.innerHTML)
    })
})

operators.forEach((y) => {
    y.addEventListener("click", () => {
        if (typeof leftHandSide[0] == "string" && typeof displayValue[0] == "string") {
            calculate()
            display.innerHTML += y.innerHTML
            operator.push(y.innerHTML)
            leftHandSide.push(displayValue.splice(0).join(""))
        }
        else {
            display.innerHTML += y.innerHTML
            operator.push(y.innerHTML)
            leftHandSide.push(displayValue.splice(0).join(""))
        }
    })
})

equal.addEventListener("click", () => {
    calculate()
})

function calculate () {
    rightHandSide.push(displayValue.splice(0).join(""))
    operate(leftHandSide.toString(), operator.toString(), rightHandSide.toString())
    leftHandSide = []
    operator = []
    rightHandSide = []
}

function operate(l, o, r) {
    if (o == "+") {
        add(l, r)
    }
    else if (o == "-") {
        subtract(l, r)
    }
    else if (o == "*") {
        multiply(l, r)
    }
    else if (o == "/") {
        divide(l, r)
    }
}

function add(l, r) {
    display.innerHTML = (+l) + (+r)
    displayValue.push((+l) + (+r))
}

function subtract(l, r) {
    display.innerHTML = l - r
    displayValue.push(l - r)
}

function multiply(l, r) {
    display.innerHTML = l * r
    displayValue.push(l * r)
}

function divide(l, r) {
    display.innerHTML = l / r
    displayValue.push(l / r)
}
