//Global Variables -> buttons and initial inputs/operators
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".enter");
const decimal = document.querySelector(".decimal");
const posneg = document.querySelector(".posneg");
const clear = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const display = document.querySelector("#display");
let displayLength = display.length;

let firstInput = null;
let secondInput = null;
let operation = null;
clear.textContent = "AC";

//Updating Display Function
function numberInput(number) {
    if(display.textContent === "0") 
        display.textContent = "";
        display.textContent += number;
        limitDisplay();
}

function limitDisplay() {
    if(display.textContent.length >= 9) {
        display.textContent = display.textContent.substring(0, 9);
    }
}


//Clear Screen
function clearScreen() {
        display.textContent = "0";
        firstInput = "";
        secondInput = "";
        operation = null;
}


//Add Decimal
function addDecimal() {
    if(display.textContent.includes(".")) {
        return display.textContent;
    } else {
        display.textContent += ".";
    }
}

//Make Negative
function negativeNumber() {
    parseInt(display.textContent);
    display.textContent = (display.textContent * -1).toString();
}

//Percent Button
function makePercent() {
    parseInt(display.textContent);
    display.textContent = (display.textContent / 100).toString();
}

//Keyboard Inputs
window.addEventListener("keydown", function(e) {
    let keys = document.querySelector(`button[data-key='${e.code}']`);
    keys.click();
});


//Set first input
function setFirst(operator) {
    if(operator === "+") {
        firstInput = parseInt(display.textContent);
        operation = "+";
        display.textContent = "0";
    } else if(operator === "-") {
        firstInput = parseInt(display.textContent);
        operation = "-";
        display.textContent = "0";
    } else if(operator === "X") {
        firstInput = parseInt(display.textContent);
        operation = "X";
        display.textContent = "0";
    } else if(operator === "/") {
        firstInput = parseInt(display.textContent);
        operation = "/";
        display.textContent = "0";
    }
}

//Equals Button
function results() {
    if(display.textContent === "0" && operation === "/") {
        display.textContent = "Error";
    } else if(operation === "+") {
        secondInput = parseInt(display.textContent);
        operate(operation, firstInput, secondInput);
        limitDisplay();
    } else if(operation === "-") {
        secondInput = parseInt(display.textContent);
        operate(operation, firstInput, secondInput);
        limitDisplay();
    } else if(operation === "X") {
        secondInput = parseInt(display.textContent);
        operate(operation, firstInput, secondInput);
        limitDisplay();
    } else if(operation === "/") {
        secondInput = parseInt(display.textContent);
        operate(operation, firstInput, secondInput);
        limitDisplay();
    }
    
}


//Numbers to display event listener
numbers.forEach((button) =>
    button.addEventListener("click", () => numberInput(button.textContent))
    );

// Operators event listener
operators.forEach((button) =>
    button.addEventListener("click", () => setFirst(button.textContent))
    );

//Clear event listener
clear.addEventListener("click", clearScreen);

//Decimal Event Listener
decimal.addEventListener("click", addDecimal);

//Make negative event listener
posneg.addEventListener("click", negativeNumber);

//Percent Event Listener
percent.addEventListener("click", makePercent);

//Equal Button
equals.addEventListener("click", results);



// Basic Functions
function add(a, b) {
    display.textContent = (parseFloat(a) + parseFloat(b)).toString();
}

function subtract(a, b) {
    display.textContent = (parseFloat(a) - parseFloat(b)).toString();
}

function multiply(a, b) {
    display.textContent = (parseFloat(a) * parseFloat(b)).toString();
}

function divide(a, b) {
    display.textContent = (parseFloat(a) / parseFloat(b)).toString();
}

//Operate Function
function operate(operator, a, b) {
    if(operator === "+") {
        return add(a, b);
    } else if(operator === "-") {
        return subtract(a, b);
    } else if(operator === "X") {
        return multiply(a, b);
    } else if(operator === "/") {
        return divide(a, b);
    }
}
