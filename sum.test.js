const sum = require('./sum');

test('should correctly sum integers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should only aaccept integers', () => {
  expect(sum('One', 'Two')).toBe(NaN);
  expect(sum('One', '2')).toBe(NaN);
  expect(sum('1', 'Two')).toBe(NaN);
});