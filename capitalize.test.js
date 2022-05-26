const capitalize = require('./capitalize');

test('capitalize first string', () => {
    expect(capitalize('believe')).toBe('Believe');
  });