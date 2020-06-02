Level 1 - NodeJS / Javascript
=============================
Dette er en introduksjon til testing som tar utgangspunkt i NodeJS, Javascript og Jest. 


Ikke snik
---------
Ikke se på andre filer enn denne før workshoppen. Om du gjør det vil du miste muligheten til å tenke gjennom og forstå
ting før poenget avsløres. 

Hjemmelekse før workshop
------------------------
For å slippe å bruke masse tid i fellesskap på å installere ditt og datt forventer vi at de som deltar har gjort 
følgende før workshoppen. Spør Google, en venn eller kollega om du står fast! Det første du må gjøre er å installere 
NodeJS og NPM (eller Yarn om du foretrekker det istedenfor NPM) på maskinen din. Bruk Google for å finne ut hvordan 
dette gjøres på din maskin om du ikke allerede har det. Anbefaler [Nodesource sine pakkebrønner](https://github.com/nodesource/distributions) 
for de som kjører Linux.

Når du har installert miljøet kan du kjøre følgende besvergelser for å installere testrammeverket Jest og kjøre testene.
Om alt går bra skal Jest skrive ut hvor mange tester den har kjørt og resultatet av de. 

    git clone git@github.com:oslokommune/origo-testing-workshop.git
    cd origo-testing-workshop/level-1/node
    npm install
    npm test
    
**Bonuspoeng:** Sett opp prosjektet i Intellij (eller hva du måtte foretrekke). Det å kjøre spesifikke tester rett
fra editoren gir en ganske fin flyt når man utvikler.   
