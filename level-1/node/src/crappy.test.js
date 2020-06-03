// Dette er en del eksempler på hvordan man ikke bør gjøre ting


test.skip('jeg er en treg test', async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => { resolve(42) }, 5000);
    });

    const answer = await promise;
    expect(answer).toBe(42);
});


// To tester der den siste avhenger av tilstand satt opp av den første
test.skip('setter opp noe tilstand', () => {
   x = "hei";
});
test.skip('denne avhenger av den forrige', () => {
    expect(x).toBe("hei");
});


// 1. Hva er galt/problematisk med denne testen?
// 2. Hva er det vi tester her?
test.skip('it can fetch headlines from vg.no', () => {
    const client = VgClient()
    const headline = client.fetchHeadline();

    expect(headline).toBe("Hvorfor du har knyttet skolissene feil hele livet");
});


// Test som tester veldig mye
test.skip('her tester vi veldig mye', () => {
    const skattemelding = lastTestSkattemelding(); // arrange
    const skatteoppgjor = beregnSkatteoppgjor(skattemelding); // act
    const tekstmelding = formaterTekstmelding(skatteoppgjor);

    expect(skatteoppgjor.sum).toBe(1000) // assert
    expect(tekstmelding).toBe("Gratulerer med dagen! Du får tilbake 1000 kroner på skatten.")
});