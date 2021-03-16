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
const buttonSign = document.getElementById("buttonSign");

// Global Variables
let display = '';
let displayValue = 0;
let clearDisplayFlag = false;
let operator = '';
let operandA;
let operandB;
let shouldOperate = false;

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
        buttonZero.addEventListener("touchstart", function (event) { updateDisplayValue("0"); event.preventDefault(); });
        buttonOne.addEventListener("touchstart", function (event) { updateDisplayValue("1"); event.preventDefault(); });
        buttonTwo.addEventListener("touchstart", function (event) { updateDisplayValue("2"); event.preventDefault(); });
        buttonThree.addEventListener("touchstart", function (event) { updateDisplayValue("3"); event.preventDefault(); });
        buttonFour.addEventListener("touchstart", function (event) { updateDisplayValue("4"); event.preventDefault(); });
        buttonFive.addEventListener("touchstart", function (event) { updateDisplayValue("5"); event.preventDefault(); });
        buttonSix.addEventListener("touchstart", function (event) { updateDisplayValue("6"); event.preventDefault(); });
        buttonSeven.addEventListener("touchstart", function (event) { updateDisplayValue("7"); event.preventDefault(); });
        buttonEight.addEventListener("touchstart", function (event) { updateDisplayValue("8"); event.preventDefault(); });
        buttonNine.addEventListener("touchstart", function (event) { updateDisplayValue("9"); event.preventDefault(); });
        buttonAdd.addEventListener("touchstart", function (event) { operatorInputHandler("add"); event.preventDefault(); });
        buttonSubtract.addEventListener("touchstart", function (event) { operatorInputHandler("subtract"); event.preventDefault(); });
        buttonMultiply.addEventListener("touchstart", function (event) { operatorInputHandler("multiply"); event.preventDefault(); });
        buttonDivide.addEventListener("touchstart", function (event) { operatorInputHandler("divide"); event.preventDefault(); });
        buttonDecimal.addEventListener("touchstart", function (event) { updateDisplayValue("."); event.preventDefault(); });
        buttonEquals.addEventListener("touchstart", function(event) { operate(); event.preventDefault(); });
        buttonClear.addEventListener("touchstart", function(event) { clear(); event.preventDefault(); });
        buttonSign.addEventListener("touchstart", function(event) { sign(); event.preventDefault(); });
        buttonDelete.addEventListener("touchstart", function(event) { backspace(); event.preventDefault(); });
        
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
        buttonDecimal.addEventListener("click", function () { updateDisplayValue(".")});
        buttonEquals.addEventListener("click", operate);
        buttonClear.addEventListener("click", clear);
        buttonSign.addEventListener("click", sign);
        buttonDelete.addEventListener("click", backspace);
    }
    
}

function updateDisplayValue(input) {
    if (clearDisplayFlag === true) {
        display = '';
        clearDisplayFlag = false;
    }

    if (input === ".") {
        if (display.includes(".")) {
            return;
        }
    }
    if (display.length < 12 - input.length) {
        display += input;
        displayValue = parseFloat(display);
        textBox.innerHTML = display;
    }
}

function sign() {
    if (display.includes("-")) {
        display = display.substr(1);
        displayValue = parseFloat(display);
        textBox.innerHTML = display;
    }

    else if (display.length < 11) {
        display = "-".concat(display);
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

    shouldOperate = false;
    clearDisplayFlag = true;
    updateDisplayValue(answer.toString());
}

function operatorInputHandler(input) {
    if (operator != null && operandA != null && shouldOperate) {
        operate();
    }

    shouldOperate = true;
    operator = input;
    operandA = displayValue;
    clearDisplayFlag = true;
}

function clear() {
    operandA = null;
    operandB = null;
    operator = '';
    clearDisplayFlag = true;
    updateDisplayValue('');
}

function backspace() {
    if (display.length > 0) {
        display = display.slice(0, display.length - 1);
        displayValue = parseFloat(display);
        textBox.innerHTML = display;
    }
}