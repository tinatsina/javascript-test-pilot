const toUpperCase = require('./test/capitalize');

describe('To Upper Case Tests', () =>{
  test('Basic Upperccase: 1', () =>{
    const result = toUpperCase('Hello');
    expect(result).toBe('HELLO');
  });

  test('Basic Upperccase: 2', () =>{
    const result = toUpperCase('MichaelJacksone');
    expect(result).toBe('MICHAELJACKSONE');
  });
});