const stringLength = require('./test/stringLength');

test('Hello -> return value = 5', () => {
  expect(stringLength('Hello')).toBe(5);
});