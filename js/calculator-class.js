class Calculator {
  constructor() {
    this.checkIfInputIsANumber = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return true;
      }
      return false;
    };

    this.checkIfDivisorIsNotZero = denominator => {
      if (denominator !== 0) {
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
      if (this.checkIfDivisorIsNotZero(b)) {
        return a / b;
      }
      throw new Error('Denominator must  be greater than zero!');
    }
    return undefined;
  };
}

module.exports = Calculator;
