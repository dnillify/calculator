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
display = '';
displayValue = 0;

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
    buttonZero.addEventListener("click", function () { updateDisplayValue("0")});
}

function updateDisplayValue(input) {
    if (display.length < 11) {
        display += input;
        displayValue = parseInt(display);
        textBox.innerHTML = display;
    }
}