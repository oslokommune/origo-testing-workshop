
// 1. Hva er galt med denne testen?
// 2. Hva er det vi tester her?
test.skip('it can fetch headlines from vg.no', () => {
    const client = VgClient()
    const headline = client.fetchHeadline();

    expect(headline).toBe("Hvorfor du har knyttet skolissene feil hele livet");
});
