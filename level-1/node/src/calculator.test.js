const calculator = require('./calculator');

// =================================
// IKKE SE PÅ IMPLEMENTASJONEN ENDA!
// =================================

// Jest matchers:
// https://jestjs.io/docs/en/using-matchers


// 1. Hvor mye kan du si om implementasjonen av add basert på denne testen?
// 2. Er det noe med denne testen som hindrer deg i å re-implementere add?
// 3. Er det noe ved denne testen som kan forbedres?
test('make sure arithmetic isn\'t broken', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

// 4 - Implementer en (korrekt) test-case som feiler
test('break me', () => {
    // expect(calculator.add(x, y)).toBe(z);
});