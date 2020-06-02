Arbeidsflyt og TDD
==================
Litt om hvordan man kan jobbe trygt og effektivt med tester. 

TDD != tester 
-------------
Av og til brukes [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html) (Test **Driven** Development) synonymt 
med det å skrive tester. Bak TDD ligger det en prosess der du skriver testene **før** produksjonskoden og bruker det til
å drive designet av produksjonskoden. Tanken er at dette tvinger deg til å tenke gjennom problemet før du begynner å kode
samtidig som det i praksis gjør det umulig å skrive ikke-testbar kode. 

Test driven development
-----------------------
Test driven development følger disse stegene. 

1. Skriv en test som beskriver noe nytt koden skal gjøre (gjør dette så inkrementelt som mulig)
2. Kjør alle testene og se at den nye testen feiler 
3. Implementer den nye koden 
4. Kjør alle testene og se at de passerer 
5. Refaktorer koden **uten** å knekke tester
6. Gå tilbake til steg 1. 

### Konsekvenser 
Når man ser på stegene ovenfor er det åpenbart at man fort ender opp med veldig mange tester som igjen fører til at 
det er viktig å fokusere på kjøretid og kodekvalitet. Husk at testkoden må følge samme standard som produksjonskoden
dersom du skal ha full effekt av tester også over tid. Dersom kvaliteten på testkoden begynner å synke kommen man fort
til et punkt der de sinker deg og hindrer deg fra å gjøre de refaktoreringene du har lyst til å gjøre i produksjonskoden.

### Refucktoring vs. refactoring
Når man gjennomfører dette strengt er det et poeng at du **enten** tukler med testkode **eller** produksjonskode. 
Dersom du tukler med begge deler samtidig kalles det en *refucktoring*. Dersom testene er avhengige av ting som burde
vært *implementasjonsdetaljer* blir dette vanskelig. 

Testene må kjøres! Ofte!
------------------------
For at tester skal ha en effekt er det åpenbart nødvendig at de kjøres. Kjøring av tester må være en del av arbeidsflyten
til hver utvikler som produserer kode på et prosjekt. I tillegg er det i dag forventet av alle semi-seriøse prosjekt at
en byggserver (f.eks. Github Actions) kjører testene hver gang man sjekker inn ny kode. 

Ting som digre commits og kun nattlig kjøring av tester reduserer effekten man kan få av tester. Dersom man har sjekket
inn fire enorme endringer og dagen etter ser at en eller flere av testene har knekt i det nattlige bygget er det ofte
veldig tidkrevende å finne ut *hva* som er galt. Man ønsker typisk rask feedback loop der en gjør mange små endringer 
og kjører testene mellom hver endring. 
