const reverseString = require('./reverse-string');

test('reverse string', () => {
    expect(reverseString('open')).toBe('nepo');
  });
  test('should accept strinng only', () => {
    expect(reverseString(1234)).toBe(undefined);
  });