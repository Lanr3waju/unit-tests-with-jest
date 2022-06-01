const calculator = require('../../calculator');

const calculate = calculator();

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

test('subtraction of strings, should return NaN (Not a Number)', () => {
  expect(calculate.subtract('23', '33')).toBe(NaN);
  expect(calculate.subtract('one', 'two')).toBe(NaN);
});
