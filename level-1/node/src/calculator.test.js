const calculator = require('./calculator');

test('make sure arithmetic isn\'t broken', () => {
    expect(calculator.add(2, 2)).toBe(4);
});