const calculator = require ('./calculator')
const calculate = calculator();
test('calculator addition', () => {
    expect(calculate.add(1, 2)).toBe(3);
  });

  test('calculator subtraction', () => {
    expect(calculate.subtract(2, 1)).toBe(1);
  });

  test('calculator division', () => {
    expect(calculate.divide(10, 2)).toBe(5);
  });

  test('calculator multiplication', () => {
    expect(calculate.multiply(1, 2)).toBe(2);
  });