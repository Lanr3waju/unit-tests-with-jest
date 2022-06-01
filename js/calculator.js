const calculator = () => {
  const checkIfInputIsANumber = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
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
      return a / b;
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
