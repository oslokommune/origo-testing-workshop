Testdekning
===========
Alle fornuftige testrammeverk kan i dag alene eller gjennom plugins beregne testdekning. Det gjøres typisk ved at 
koden instrumenteres mens testen kjører og basert på hvor stor andel av mulige "stier" gjennom koden som har blitt 
kjørt av testene beregnes det en "test coverage score". 

Godt nok
--------
100% coverage betyr som regel at du må skrive ekstremt mye testkode som må vedlikeholdes i fremtiden. Det er ikke mye 
kode hvor 100% test coverage er fornuftig bruk av tid og penger. Du må gjøre en vurdering av hvor kritisk koden er når
du bestemmer deg hvor høy dekning du mener at koden trenger.

**Eksempel:** Følgende kode har 100% testdekning, men er åpenbart ikke korrekt.


    fun add(a, b) {
        return 42;
    }
    
    test('40 + 2 = 42') {
        expect(add(40, 2)).toBe(42)
    }

100% coverage betyr ikke at koden er bugfri!
--------------------------------------------
Det er lett å tro at kode som har 100% testdekning må være 100% korrekt, men det er definitivt **ikke** riktig. 100%
coverage betyr bare at alle mulige stier gjennom koden har blitt kjørt. Det gir absolutt ingen garanti for at testene 
faktisk verifiserer korrekt oppførsel. 

**Obs!** Noen bruker faktisk det at 100% testdekning ikke gir garanti for 100% korrekthet som et argument for å 
ikke skrive tester i det hele tatt. Hvilken kode vil du stole mest på? Den med 0% eller 100% testdekning?

