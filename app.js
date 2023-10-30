let firstNum = null;
let secondNum = null;
let operatorSign = null;

//performs addition of two numbers
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

//subtraction of two numbers
function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

//multiplication of two numbers
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

//divide two numbers
function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

//carry out relevant arithmetic according to the given operator input
function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}