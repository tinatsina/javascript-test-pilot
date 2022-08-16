const Calculator = require('./test/calculator');

// ----------------------
// The Addition tests
// ----------------------

describe('Calculator Addition Test', () => {
  test('2+3 -> 5', () => {
    const result = Calculator.add(2,3);
    expect(result).toBe(5);
  });

  test('123+123 -> 246', () => {
    const result = Calculator.add(123,123);
    expect(result).toBe(246);
  });

  test('2500+2500 -> 5000', () => {
    const result = Calculator.add(2500,2500);
    expect(result).toBe(5000);
  });

  test('1111+2222 -> 3333', () => {
    const result = Calculator.add(1111,2222);
    expect(result).toBe(3333);
  });
});

// ----------------------
// The Subtraction tests
// ----------------------

describe('Calculator Addition Test', () => {
  test('Simple subtraction 1', () => {
    const result = Calculator.subtract(5,3);
    expect(result).toBe(2);
  });

  test('Simple subtraction 2', () => {
    const result = Calculator.subtract(123,123);
    expect(result).toBe(0);
  });

  test('Negative number subtraction', () => {
    const result = Calculator.subtract(2500,3000);
    expect(result).toBe(-500);
  });

  test('Big boys subtraction', () => {
    const result = Calculator.subtract(100000,10000);
    expect(result).toBe(90000);
  });
});

// ----------------------
// The Multiply tests
// ----------------------

describe('Calculator Addition Test', () => {
  test('Simple multiply 1', () => {
    const result = Calculator.times(5,3);
    expect(result).toBe(15);
  });

  test('Simple multiply 2', () => {
    const result = Calculator.times(123,10);
    expect(result).toBe(1230);
  });

  test('Negative number multiplication', () => {
    const result = Calculator.times(-5,3);
    expect(result).toBe(-15);
  });

  test('Big boys multiplication', () => {
    const result = Calculator.times(1000,1000);
    expect(result).toBe(1000000);
  });
});

// ----------------------
// The Divide tests
// ----------------------

describe('Calculator Addition Test', () => {
  test('Simple divide 1', () => {
    const result = Calculator.divide(5,3);
    expect(result).toBe(5/3);
  });

  test('Simple divide 2', () => {
    const result = Calculator.divide(1230,10);
    expect(result).toBe(123);
  });

  test('Negative number division', () => {
    const result = Calculator.divide(-15,3);
    expect(result).toBe(-5);
  });

  test('Big boys division', () => {
    const result = Calculator.divide(10000,1000);
    expect(result).toBe(10);
  });
});