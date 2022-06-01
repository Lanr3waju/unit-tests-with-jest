const capitalize = require('./capitalize');

const capitalizeString = capitalize();
test('capitalize first string', () => {
  expect(capitalizeString.capitalizeStr('believe')).toBe('Believe');
});

test('should accept string alone', () => {
  expect(capitalizeString.capitalizeStr(134)).toBe(undefined);
});

test('should reject already capitalized string', () => {
  expect(capitalizeString.capitalizeStr('Believe')).toBe(false);
});

test('check string', () => {
  expect(capitalizeString.checkStringCapitalization('Believe', 'Believe')).toBe(true);
  expect(capitalizeString.checkStringCapitalization('Believe', 'believe')).toBe(false);
});
