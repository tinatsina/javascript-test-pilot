const stringLength = require('./test/stringLength');

describe('String Testing', () => {
  test('Hello -> return value = 5', () => {
    const result = stringLength('Hello');
    expect(result).toBe(5);
  });

  test('Microverse Universe -> return value = err', () => {
    const result = stringLength('Microverse Universe');
    expect(result).toBe('error - character length too short');
  });

  test('null = err', () => {
    const result = stringLength('');
    expect(result).toBe('error - character length too short');
  });
});