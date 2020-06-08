Level 1 - Introduksjon til testing
==================================
Denne delen handler om hva testing er, hvorfor man gjør det samt oppleve den gode følelsen man får i magen
av å ha skrevet tester som passer på at kode man har skrevet gjør det man vil. 

Om denne workshoppen
--------------------
Denne workshoppen er lagt opp uten powerpoints og alt av materiale ligger i dette repoet. Du kan velge å følge et av 
følgende språk. Prinsippene er stort sett de samme uavhengig av hvilket språk / teknologi du velger.

1. [NodeJS / Javascript](node/README.md)
2. [JVM / Kotlin](jvm/README.md)

Oppgaver og eksempler
---------------------
 * **Kalkulator:** [Javascript](node/src/calculator.test.js), [Kotlin](jvm/src/test/kotlin/level1/AwesomeCalculatorTest.kt)
 * **Eksempler på dårlige tester:** [Javascript](node/src/crappy.test.js) 
 * **Oppgave: Forbedre denne:** [Javascript](node/src/fairytale-repo.test.js), [Kotlin](jvm/src/test/kotlin/level1/FairytaleRepositoryTest.kt)
 * **100% coverage:** [Javascript](node/src/coverage-calculator.test.js),  [Kotlin](jvm/src/test/kotlin/level1/OneHundredPercentCoverageCalculatorTest.kt)

Leksjoner
---------
 * [Motivasjon - Noen grunner til å skrive tester](lessons/01-hvorfor.md)
 * [Mer informasjon om forskjellige typer tester](lessons/02-typer.md)
 * [Test driven development (TDD)](lessons/03-tdd.md)
 * [Anatomi - Oppbygning av en test](lessons/04-anatomi.md)
 * [Testdekning og godt nok](lessons/05-coverage.md)
