let finalValue = null;
let nextNum = null;
let currentOperator = null;
let displayValue = "";

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
    } else if (operator === "x") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        if (num2 == 0) {
            return "Math error, cannot divide by 0";
        } else {
            return divide(num1, num2);
        }
    }
}

//function to round number to nearest 5 decimal places
function rounding(numToRound) {
    let roundingPlace = 100000;
    return Math.round(numToRound * roundingPlace) / roundingPlace;
}

//event Listeners

let displayInput = document.querySelector(".display-input");
let displayOutput = document.querySelector(".display-output");
let operatorButton = document.querySelectorAll(".operator-btn");
let resultButton = document.querySelector(".result-btn");
let clearButton = document.querySelector(".clear-btn");
let delButton = document.querySelector(".del-btn");

//event listener to display the number when relevant button is pressed
document.querySelectorAll(".number-btn").forEach((item) => {
    item.addEventListener('click', (e) => {
        displayValue += `${e.target.innerText}`;
        displayInput.textContent = displayValue;
    })
})

//event listener to remove all the characters in the calculator display 
clearButton.addEventListener('click', () => {
    displayValue = "";
    displayInput.textContent = displayValue;
    displayOutput.textContent = "";
    
})

//event listener to remove the last character in the display screen
delButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, displayValue.length -1);
    displayInput.textContent = displayValue;
})

