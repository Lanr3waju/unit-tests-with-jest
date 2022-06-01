class Calculator {
  constructor() {
    this.checkIfInputIsANumber = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return true;
      }
      return false;
    };
  }

  add = (a, b) => {
    if (this.checkIfInputIsANumber(a, b)) {
      return a + b;
    }
    return undefined;
  };

  subtract = (a, b) => {
    if (this.checkIfInputIsANumber(a, b)) {
      return a - b;
    }
    return undefined;
  };

  multiply = (a, b) => {
    if (this.checkIfInputIsANumber(a, b)) {
      return a * b;
    }
    return undefined;
  };

  divide = (a, b) => {
    if (this.checkIfInputIsANumber(a, b)) {
      return a / b;
    }
    return undefined;
  };
}

module.exports = Calculator;
