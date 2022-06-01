const calculator = () => {
  const checkIfInputIsANumber = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return true;
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
    add,
    subtract,
    divide,
    multiply,
  };
};

module.exports = calculator;
