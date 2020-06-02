Arbeidsflyt og TDD
===========================
Litt om hvordan man kan jobbe trygt og effektivt med tester. 

Mythbusting: TDD != tester 
--------------------------
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


### Refucktoring vs. refactoring
Når man gjennomfører dette strengt er det et poeng at du **enten** tukler med testkode **eller** produksjonskode. 
Dersom du tukler med begge deler samtidig kalles det en *refucktoring*. 

### Konsekvenser 
Når man ser på stegene ovenfor er det åpenbart at man fort ender opp med veldig mange tester som igjen fører til at 
det er viktig å fokusere på kjøretid og kodekvalitet. Husk at testkoden må følge samme standard som produksjonskoden
dersom du skal ha full effekt av tester også over tid. Dersom kvaliteten på testkoden begynner å synke kommen man fort
til et punkt der de sinker deg og hindrer deg fra å gjøre de refaktoreringene du har lyst til å gjøre i produksjonskoden.