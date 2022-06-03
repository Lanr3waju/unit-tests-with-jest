const calculator = require('../../calculator');

const calculate = calculator();

test('multiplication of positive integers, should return positive integer', () => {
  expect(calculate.multiply(1, 2)).toBe(2);
});

test('multiplication of 0 and positive integer, should return 0', () => {
  expect(calculate.multiply(0, 2)).toBe(0);
});

test('multiplication of positive and negative integers, should return negative integer', () => {
  expect(calculate.multiply(1, -2)).toBe(-2);
});

test('multiplication of floats, should return positive float', () => {
  expect(calculate.multiply(0.5, 5.5)).toBe(2.75);
});

test('multiplication of string, should return NaN (Not a Number)', () => {
  expect(calculate.multiply('23', '33')).toBe(NaN);
  expect(calculate.multiply('one', 'two')).toBe(NaN);
});