const addReallyFast = require('./coverage-calculator')

test('40 + 2 = 42', () => {
    expect(addReallyFast(40,2)).toBe(42);
});

