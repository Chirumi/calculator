let leftHandSide = 0
let operator = 0
let rightHandSide = 0

function add(l, r) {
    return l + r
}

function subtract(l, r) {
    return l - r
}

function multiply(l, r) {
    return l * r
}

function divide(l, r) {
    return l / r
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