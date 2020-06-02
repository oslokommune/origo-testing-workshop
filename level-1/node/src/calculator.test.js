const calculator = require('./calculator');

// Jest matchers:
// https://jestjs.io/docs/en/using-matchers

test('make sure arithmetic isn\'t broken', () => {
    expect(calculator.add(2, 2)).toBe(4);
});
