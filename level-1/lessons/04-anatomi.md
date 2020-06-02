Anatomi
=======
Uavhengig av språk og rammeverk følger tester ofte samme mønster:

1. Sett opp kontekst / tilstand / input for testen  
2. Kjør koden man ønsker å teste 
3. Verifiser at koden gjorde det man ønsket 

*Ps! en god test vil også sjekke at koden ikke gjorde noe man ikke forventet*

Denne flyten kalles ofte **A**rrange, **A**ct and **A**ssert. Noen testrammeverk bygger opp under dette ved å legge opp
til at man gir en tekstlig beskrivelse til hvert av disse stegene og på den måten bygger opp veldig beskrivende tester
som i teorien fagpersoner kan forholde seg til. Dette kalles Behavior Driven Development (BDD). 

 
Rollen til testrammeverk
------------------------
Det finnes typisk mange testrammeverk for et og samme språk. Jobben til et testrammeverk er i hovedsak å tilby et api 
for å definere og kjøre tester. Det høres latterlig lett ut, men du ønsker et testrammeverk som kan:
 
 1. Integreres med byggesystemet ditt
 2. Kjøres på byggserveren din 
 3. Integreres med editoren din sånn at du under utvikling kan kjøre et sub-set av testene. 
 4. Ikke medfører unødvendig kode. Fokuset skal være på domenet, ikke tilfeldig kode. 
 
Assert / matcher bibliotek
--------------------------
Testrammeverk kommer typisk med en del innebygde metoder for å verfisere forventningene i testene, men det finnes også 
mange bibliotek som tilbyr et rikere sett med slike metoder. Noen gjør det enklere å skrive gode tester for spesielle
datatyper, mens andre er fokusert på bedre feilmeldinger eller syntax. 