const repo = require('./fairytale-repo');

// =================================
// IKKE SE PÅ IMPLEMENTASJONEN ENDA!
// =================================

// Jest matchers:
// https://jestjs.io/docs/en/using-matchers

// 1. Hvor mye stoler du på at det ikke er en bug i implementasjonen basert på denne testen?
test('load Askeladden brothers', () => {
    const brothers = repo.fetchAskeladdenBrothers();

    expect(brothers).toContain("Per");
    expect(brothers).toContain("Pål");
    expect(brothers).toContain("Espen Askeladden");
});
