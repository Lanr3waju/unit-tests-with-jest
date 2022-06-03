const Calculator = require('../../calculator-class');

const calculate = new Calculator();

test('subtraction of positive integers, should return positive integer', () => {
  expect(calculate.subtract(2, 1)).toBe(1);
});

test('subtraction of zero from positive integer, should return negative integer', () => {
  expect(calculate.subtract(0, 2)).toBe(-2);
});

test('subtraction of positive and negative integer, should return positive integer', () => {
  expect(calculate.subtract(1, -2)).toBe(3);
});

test('subtraction of float, should return negative integer', () => {
  expect(calculate.subtract(0.5, 5.5)).toBe(-5);
});

test('subtraction of strings, should return undefined', () => {
  expect(calculate.subtract('23', '33')).toBe(undefined);
  expect(calculate.subtract('one', 'two')).toBe(undefined);
});
