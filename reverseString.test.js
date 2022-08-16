const reverseString = require('./test/reverseString');

describe('Reverse String Unit Test', () =>{
  test('top -> pot', () =>{
    const result = reverseString('pot');
    expect(result).toBe('top');
  });
});
