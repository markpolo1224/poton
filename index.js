let currentOperation = null;
let currentInput = '';
let previousInput = '';

const display = document.getElementById('display');

function clear() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

// Initialize with an empty display
clear();
