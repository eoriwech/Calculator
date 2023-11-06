let totalValue = null;
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

//event listener to carry out the calculation when equal button is pressed
//the value of the variable 'displayValue' is split into array
//the operate function is then called with the resulting value of the variables
resultButton.addEventListener('click', () => {
    let displayValueArray = displayValue.split(" ");
    totalValue = parseFloat(displayValueArray[0]);

    //loop through odd index number position where operators are expected
    //assign the next number which is one higher than operator index position
    //evalute the result and assign it to the total value
    for (let i = 1; i < displayValueArray.length; i += 2) {
        currentOperator = displayValueArray[i];
        nextNum = parseFloat(displayValueArray[i + 1])
        totalValue = operate(currentOperator, totalValue, nextNum);
    }
 
    //rounding up the total value up to 5 decimal places
    totalValue = rounding(totalValue);

    displayOutput.textContent = totalValue;
})

//event listener to display the operator sign when pressed
operatorButton.forEach((item) => {
    item.addEventListener('click', (e) => {
        displayValue += ` ${e.target.innerText} `;
        displayInput.textContent = displayValue;
        let displayValueArray = displayValue.split(" ");
        
        //if the third value exist, which makes a pair then evaluate them
        if (displayValueArray[2] != "") {

            //assigning numbers to evalute based on the array created by splitting up the current display values
            totalValue = parseFloat(displayValueArray[0]);
            currentOperator = displayValueArray[1];
            nextNum = parseFloat(displayValueArray[2])
            totalValue = operate(currentOperator, totalValue, nextNum);

            //after the first pair is evaluated, assign resulting total value to the first term in display array
            //remove the remaining terms so that new number and operator can take their place
            displayOutput.textContent = totalValue;
            displayValueArray[0] = `${totalValue}`;
            displayValueArray.splice(1, 2)
            displayValue = displayValueArray.join(" ");
        }
        //rounding up the total value up to 5 decimal places
        totalValue = rounding(totalValue);
        
        displayOutput.textContent = totalValue;
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
