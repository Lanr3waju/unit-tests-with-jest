class Calculator {
  constructor() {
    this.#checkIfInputIsANumber = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return true;
      }
    };
  }

  add = (a, b) => {
    if (this.#checkIfInputIsANumber(a, b)) {
      return a + b;
    }
  };

  subtract = (a, b) => {
    if (this.#checkIfInputIsANumber(a, b)) {
      return a - b;
    }
  };

  multiply = (a, b) => {
    if (this.#checkIfInputIsANumber(a, b)) {
      return a * b;
    }
  };

  divide = (a, b) => {
    if (this.#checkIfInputIsANumber(a, b)) {
      return a / b;
    }
  };
}

const calc = new Calculator();
console.log(calc.add(25, 25));
