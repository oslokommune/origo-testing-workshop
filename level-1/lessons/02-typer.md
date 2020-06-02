Forskjellige typer tester
=========================
Det første nivået i denne workshoppen handler om enhetstester og en introduksjon til testing, men det er greit
å vite at man ofte klassifiserer tester i forskjellige typer. Det er mange pedantiske utviklere som elsker å krangle
om hva som skiller disse. Dette er en relativt pragmatisk liste med typene og det som har praktisk betydning.  

Det kan være greit å vite at man ofte referer til disse som en "trekant" der man for et system har en base med mange,
raske enhetstester, et mindre antall integrasjonstester og noen få funsjonelle tester på toppen.


Unit-tester / enhetstester
--------------------------
Som navnet sier tester disse en veldig spesifikk del av koden. Mange elsker å diskutere hva som er en passelig størrelse
på en enhet. 

Her en en liste over ting egenskaper ved en god enhetstest.

 * Den er ekstremt rask. Starter og fullfører på noen få millisekunder. 
 * Du har ekstremt mange av de! 
 * Ikke avhengig av implementasjonen (gir deg mulighet til å endre / optimalisere implementasjonen uten å tukle med testen)
 * En utvikler som leser den lærer noe om domenet. Eksempel: aah, det er sånn denne delen av skatteberegningen fungerer!
 * Gir en god feilmelding når den feiler. Det skjer ganske ofte at man knekker en test og blir usikker på hvorfor testen
er sånn som den er. En god test forklarer eller i det minste hinter om hvorfor det den tester skal være sånn. 
 * Gjør det ganske åpentbart hva som har feilet når den feiler (derav navnet unit test). Eksempel: Det er kutt pinlig 
dersom testen `tennplugg lager gnist` feiler pga. en bug i klassen `Sminkespeil`.
 * Bruker ord og uttrykk fra domenet / problemområdet man jobber med. 
 * Koden holder minst like god kvalitet som produksjonskoden. Mye duplisering og uleselig kode vil gjør at noen på sikt
kommer og sletter alle testene fordi det koster for mye å vedlikeholde de. 

Integrasjonstester 
-------------------
Tester at flere enheter fungerer sammen. Her kan man f.eks. spinne opp databaser, meldingskøer eller andre tjenster
for å teste at koden man har skrevet fungerer med den infrastrukturen man har tenkt å kjøre på. Dette er åpenbart 
tidkrevende så for mange av disse tingene finnes det lettvektsversjoner av hvor man ofrer litt realisme mot kortere
kjøretid. 

Noen gode egenskaper:

 * Stabile (ikke flaky). Det kan være notorisk vanskelig å lage en stabil test når man må forholde seg til oppstartstid,
konfigurasjon, timeouts osv osv når reelle systemer skal snakke sammen ofte på tvers av OS-prosesser.
 * Så raske som mulig. Her må man ofte finne balansen mellom isolasjon og ytelse. Eksempel: Dersom man spinner opp en 
helt frisk database for hver eneste test oppnår man veldig god isolasjon mellom testene, men på et tidspunkt blir den
totale kjøretiden så lang at man ikke kjører testene så ofte som man burde / ville og de mister mye av verdien. 
 * Du har ikke så mange av de.
 
Funksjonelle tester / ui-tester
-------------------------------
De fleste moderne grafiske grensesnitt (web, android, ios..) har et eller flere api-er som gjør at man kan skrive tester
som bokstavelig talt trykker seg gjennom grensesnittet på samme måte som en bruker ville gjort det. Fordelen med dette 
er åpenbart at det er veldig realistisk, men det har en del ulemper..
 
 * Notorisk trege
 * Kostbare å vedlikeholde (må typisk endres hver gang grensesnittet endres)
 * Ofte vanskelig å si hvor en feil er når en test feiler
 * Krever ofte mye infrastruktur og automatisering for å kjøre

En god funksjonell test har disse egenskapene: 

 * Kjører så raskt som det lar seg gjøre
 * Selve testen er implementert med (ekstra) tanke på at de må oppdateres ofte.
 * En domeneekspert (en som jobber med faget) kan forstå testen og si om det den tester er rett / feil. 
 * De er ikke så mange

Ytselsestester
--------------
Det er **ekstremt** vanskelig å lage gode ytelsestester som virkelig hjelper. I den virkelige verden er det så mange
ting som nettverk, drivere, proxyer, trege disker, andre prosesser og tusen andre ting som du ikke klarer å gjenskape
i en test, men som lett kan utgjøre et ytelsesproblem. Vurder om du ikke er bedre tjent med å bruke tiden på å 
implementere / forbedre overvåkning som setter deg i stand til å finne flaskehalser etterhvert som de oppstår. 

Dersom du likevel vil skrive en ytelsestest må du lese deg opp på hvordan det gjøres på den plattformen du er på. 
Ting som garbage collection og just-in-time kompilatorer gjør det ganske vanskelig å skrive ytelsestester som gir 
et riktig bilde.