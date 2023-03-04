class Calculator {
  constructor(preOperandElement, currentOperandElement, operationSignElement) {
    this.preOperandElement = preOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.operationSignElement = operationSignElement;
    this.clear();
  }

  clear() {
    this.preOperand = '';
    this.currentOperand = '';
    this.operation = '';
  }

  append(buttonText) {
    if (buttonText === '.' && this.currentOperand.includes('.')) {
      return;
    }
    this.currentOperand += buttonText;
  }

  operate(operation) {
    if (this.currentOperand === '') {
      alert('you need one operand to start calculation');
      return;
    } else if (this.operation !== '' && this.currentOperand !== '') {
      this.compute();
      this.operation = operation;
      this.updateDisplay();
      return;
    }
    this.operation = operation;
    this.preOperand = this.currentOperand;
    this.currentOperand = '';
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
    this.preOperandElement.innerText = this.preOperand;
    this.operationSignElement.innerText = this.operation;
  }

  del() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  compute() {
    let result;
    switch (this.operation) {
      case '+':
        result = parseFloat(this.preOperand) + parseFloat(this.currentOperand);
        break;
      case '-':
        result = parseFloat(this.preOperand) - parseFloat(this.currentOperand);
        break;
      case '*':
        result = parseFloat(this.preOperand) * parseFloat(this.currentOperand);
        break;
      case '÷':
        if (this.currentOperand === '0') {
          alert('you cann not divid by 0');
          this.currentOperand = '';
          return;
        }
        result = parseFloat(this.preOperand) / parseFloat(this.currentOperand);
        break;
    }
    this.preOperand = result.toString();
    this.currentOperand = '';
    this.operation = '';
  }
}

export default Calculator;