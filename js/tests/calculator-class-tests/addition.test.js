const Calculator = require('../../calculator-class');

const calculate = new Calculator();
test('addition of positive integers, should return positive integer', () => {
  expect(calculate.add(1, 2)).toBe(3);
});

test('addition of zero and positive integer, should return positive integer', () => {
  expect(calculate.add(0, 2)).toBe(2);
});

test('addition of positive and negative integer, should return negative integer', () => {
  expect(calculate.add(1, -2)).toBe(-1);
});

test('addition of floats, should return positive integers', () => {
  expect(calculate.add(0.5, 5.5)).toBe(6);
});

test('addition of strings, should return undefined', () => {
  expect(calculate.add('23', '33')).toBe(undefined);
  expect(calculate.add('one', 'two')).toBe(undefined);
});