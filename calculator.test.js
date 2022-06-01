const calculator = require('./calculator');

const calculate = calculator();
test('calculator addition', () => {
  expect(calculate.add(1, 2)).toBe(3);
  expect(calculate.add(0, 2)).toBe(2);
  expect(calculate.add(1, -2)).toBe(-1);
  expect(calculate.add(0.5, 5.5)).toBe(6);
  expect(calculate.add('23', '33')).toBe(NaN);
  expect(calculate.add('one', 'two')).toBe(NaN);
});

test('calculator subtraction', () => {
  expect(calculate.subtract(2, 1)).toBe(1);
  expect(calculate.subtract(0, 2)).toBe(-2);
  expect(calculate.subtract(1, -2)).toBe(3);
  expect(calculate.subtract(0.5, 5.5)).toBe(-5);
  expect(calculate.subtract('23', '33')).toBe(NaN);
  expect(calculate.subtract('one', 'two')).toBe(NaN);
});

test('calculator division', () => {
  expect(calculate.divide(10, 2)).toBe(5);
  expect(calculate.divide(0, 2)).toBe(0);
  expect(calculate.divide(1, -2)).toBe(-0.5);
  expect(calculate.divide(0.5, 1)).toBe(0.5);
  expect(calculate.divide('23', '33')).toBe(NaN);
  expect(calculate.divide('one', 'two')).toBe(NaN);
});

test('calculator multiplication', () => {
  expect(calculate.multiply(1, 2)).toBe(2);
  expect(calculate.multiply(0, 2)).toBe(0);
  expect(calculate.multiply(1, -2)).toBe(-2);
  expect(calculate.multiply(0.5, 5.5)).toBe(2.75);
  expect(calculate.multiply('23', '33')).toBe(NaN);
  expect(calculate.multiply('one', 'two')).toBe(NaN);
});