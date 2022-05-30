const calculator = () => {
  checkIfInputIsANumber = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return true;
    } else {
      return NaN;
    }
  };

  const add = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a + b;
    }
  };

  const subtract = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a - b;
    }
  };

  const multiply = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a * b;
    }
  };

  const divide = (a, b) => {
    if (checkIfInputIsANumber(a, b)) {
      return a / b;
    }
  };

  return {
    checkIfInputIsANumber,
    add,
    subtract,
    divide,
    multiply,
  };
};

module.exports = calculator;
