const calculator = () => {
  const checkIfInputIsANumber = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return true;
    }
    return false;
  };

  const checkIfDivisorIsNotZero = denominator => {
    if (denominator !== 0) {
      return true;
    }
    return false;
  };

  const add = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a + b;
    }
    return NaN;
  };

  const subtract = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a - b;
    }
    return NaN;
  };

  const multiply = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a * b;
    }
    return NaN;
  };

  const divide = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      if (checkIfDivisorIsNotZero(b)) {
        return a / b;
      }
      throw new Error('Denominator must  be greater than zero!');
    }
    return NaN;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

module.exports = calculator;
