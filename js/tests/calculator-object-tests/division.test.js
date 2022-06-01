const calculator = require('../../calculator');

const calculate = calculator();

test('division of positive integers, should return positive integer', () => {
  expect(calculate.divide(10, 2)).toBe(5);
});

test('division of 0 and positive integer, should return 0', () => {
  expect(calculate.divide(0, 2)).toBe(0);
});

test('division of positive and negative integers, should return negative float', () => {
  expect(calculate.divide(1, -2)).toBe(-0.5);
});

test('division of float and positive integer, should return float', () => {
  expect(calculate.divide(0.5, 1)).toBe(0.5);
});

test('division of strings, should return NaN (Not a Number)', () => {
  expect(calculate.divide('23', '33')).toBe(NaN);
  expect(calculate.divide('one', 'two')).toBe(NaN);
});