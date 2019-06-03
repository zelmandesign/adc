# AdCookie

Zadanie rekrutacyjne

## Technologie:

* Jquery
* Sass
* Webpack
* [Stylelint](https://github.com/stylelint/stylelint)
* [Bootstrap 4](https://getbootstrap.com/)

## Specyfikacja:

`Menu` – chyba byl blad w opisie polecenia bo 'skroluj w dol' bylo uzyte dwa razy ale zrobilem nav, ktory chowa sie na scrolu w dol i pojawia podczas scrolu w gore. Menu dziala tez na tel.

`Image overlay` - zrobilem to w cssie ale obrazki w assetach roznia sie troche od tych w makiecie ale powinno byc dobrze. Opacity overlayu to 50% i mix-blend-mode: overlay;

`Wyszukiwarka` – dane sa wyciagniete z API przy pomocy jquery a potem wklejone do carousel z bootstrapa za pomoc prostego loop'a. Klikniecie na button 'Zapytaj' podowduje scroll za pomoca smooth scroll. Klikniecie na 'wyszukiwarka' w navbarze tez powoduje scroll do formularza. „Pobierz plan” nie otwiera pliku PDF bo nie ma linku do pdfa w jsonie.

`Formularze` – zrobilem tylko html i walidajce formularzy. Nie robilem wysylania formularza bo nie robilem wordpressa. Zrobilem tak, ze w polu telefon mozna wpisywac tylko liczby.

`Statystyki` – naliczanie statystyk wlacza sie gdy zescrolujemy do tego div'a a nie podczas pierwszego zaladowania sie strony.

`Animacje` – dodalem animacje przy pomocy animate.css & wow.js - takze nie wlaczaja sie podczas pierwszego zaladowania sie strony tylko jak ze scrolujemy do odpowiedniego div'a.

`RWD` – zrobilem responsive za pomoca Bootstrap'a. Carousel moglby wygladac lepiej na telefonie ale nie wiedzialem gdzie upchnac button next & prev

## Feedback

Nie ukrywam, ze bardzo zalezy mi na feedback'u. ` 