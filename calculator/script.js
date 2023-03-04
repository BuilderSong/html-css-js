import Calculator from "./Calculator.js";

const allClearButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const preOperandElement = document.querySelector('[data-previous-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');
const operationSignElement = document.querySelector('[operation-sign]');


const calculator = new Calculator(preOperandElement, currentOperandElement, operationSignElement);

numberButtons.forEach(
  button =>
    button.addEventListener('click', () => {
      calculator.append(button.innerText);
      calculator.updateDisplay();
    }))

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calculator.del();
  calculator.updateDisplay();
})

operationButtons.forEach(button =>
  button.addEventListener('click', () => {
    calculator.operate(button.innerText);
    calculator.updateDisplay();
  }))

equalButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
})



