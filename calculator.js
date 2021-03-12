// Get References
const textBox = document.getElementById("textBox");
const buttonZero = document.getElementById("buttonZero");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");
const buttonClear = document.getElementById("buttonClear");
const buttonDelete = document.getElementById("buttonDelete");
const buttonAdd = document.getElementById("buttonAdd");
const buttonSubtract = document.getElementById("buttonSubtract");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonDivide = document.getElementById("buttonDivide");
const buttonEquals = document.getElementById("buttonEquals");
const buttonDecimal = document.getElementById("buttonDecimal");

// Global Variables
let display = '';
let displayValue = 0;
let clearDisplayFlag = false;
let operator = '';
let operandA = 0;
let operandB = 0;

addListeners();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function addListeners() {
    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        buttonZero.addEventListener("touchstart", function () { updateDisplayValue("0")});
        buttonOne.addEventListener("touchstart", function () { updateDisplayValue("1")});
        buttonTwo.addEventListener("touchstart", function () { updateDisplayValue("2")});
        buttonThree.addEventListener("touchstart", function () { updateDisplayValue("3")});
        buttonFour.addEventListener("touchstart", function () { updateDisplayValue("4")});
        buttonFive.addEventListener("touchstart", function () { updateDisplayValue("5")});
        buttonSix.addEventListener("touchstart", function () { updateDisplayValue("6")});
        buttonSeven.addEventListener("touchstart", function () { updateDisplayValue("7")});
        buttonEight.addEventListener("touchstart", function () { updateDisplayValue("8")});
        buttonNine.addEventListener("touchstart", function () { updateDisplayValue("9")});
        buttonAdd.addEventListener("touchstart", function () { operatorInputHandler("add")});
        buttonSubtract.addEventListener("touchstart", function () { operatorInputHandler("subtract")});
        buttonMultiply.addEventListener("touchstart", function () { operatorInputHandler("multiply")});
        buttonDivide.addEventListener("touchstart", function () { operatorInputHandler("divide")});
        buttonEquals.addEventListener("touchstart", operate);
        buttonClear.addEventListener("touchstart", clear);
        
    }
    else {
        buttonZero.addEventListener("click", function () { updateDisplayValue("0")});
        buttonOne.addEventListener("click", function () { updateDisplayValue("1")});
        buttonTwo.addEventListener("click", function () { updateDisplayValue("2")});
        buttonThree.addEventListener("click", function () { updateDisplayValue("3")});
        buttonFour.addEventListener("click", function () { updateDisplayValue("4")});
        buttonFive.addEventListener("click", function () { updateDisplayValue("5")});
        buttonSix.addEventListener("click", function () { updateDisplayValue("6")});
        buttonSeven.addEventListener("click", function () { updateDisplayValue("7")});
        buttonEight.addEventListener("click", function () { updateDisplayValue("8")});
        buttonNine.addEventListener("click", function () { updateDisplayValue("9")});
        buttonAdd.addEventListener("click", function () { operatorInputHandler("add")});
        buttonSubtract.addEventListener("click", function () { operatorInputHandler("subtract")});
        buttonMultiply.addEventListener("click", function () { operatorInputHandler("multiply")});
        buttonDivide.addEventListener("click", function () { operatorInputHandler("divide")});
        buttonEquals.addEventListener("click", operate);
        buttonClear.addEventListener("click", clear);
    }
    
}

function updateDisplayValue(input) {
    if (clearDisplayFlag === true) {
        display = '';
        clearDisplayFlag = false;
    }

    if (display.length < 12 - input.length) {
        display += input;
        displayValue = parseFloat(display);
        textBox.innerHTML = display;
    }
}

function operate() {
    operandB = displayValue;
    let answer = 0;
    switch (operator) {
        case "add":
            answer = add(operandA, operandB);
            break;
        case "subtract":
            answer = subtract(operandA, operandB);
            break;
        case "multiply":
            answer = multiply(operandA, operandB);
            break;
        case "divide":
            answer = divide(operandA, operandB);
            break;
    }

 
    
    let answerString = answer.toString()
    console.log("Answer: " + answer);
    console.log("Answer String: " + answerString);

    if (answerString.length > 11){
        if (answer < 0) {
            answer = answer.toPrecision(8);
        }
        else if (answer < 1){
            answer = answer.toPrecision(9);

        }
        else {
            answer = answer.toPrecision(10);
        }

        if (answer.toUpperCase().includes("E")) {
            let precision = answer.slice(answer.toUpperCase().indexOf("E")).length;
            if (parseFloat(answer) < 0) {
                precision++;
            }
            answer = parseFloat(answer).toPrecision(10 - precision);
        }
    }


    clearDisplayFlag = true;
    updateDisplayValue(answer.toString());
}

function operatorInputHandler(input) {
    operator = input;
    operandA = displayValue;
    clearDisplayFlag = true;
}

function clear() {
    operandA = 0;
    operandB = 0;
    operator = '';
    clearDisplayFlag = true;
    updateDisplayValue('');
}