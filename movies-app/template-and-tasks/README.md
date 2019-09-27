# Lab 05

## Zadanie 1
Wykorzystując kod z folderu zad01 wczytaj plik movies.json i wyświetl na ekranie liste wszystkich filmów.
Wykorzystaj do tego metode map()

## Zadanie 2
Dopisz komponent który wyświetli ocene w postaci liczby dla każdego z filmu. Wykorzystaj dane z JSONa.

## Zadanie 3
Przerób komponent z zadania 2 w taki sposób aby prezentował ocene w postaci odpowiedniej liczby gwiazdek.
Przykładowo: 6 gwiazdek dla filmu, który ma ocene 6.

Możesz wykorzystać zewnętrzną bibliotekę:

* [react-repeat-component](https://github.com/nuragic/react-repeat-component) -
Render any component/element N times

## Zadanie 4
Wykorzystując kod z poprzedniego zadania wyświetl tylko te filmy, których ocena (rating) jest większa niż 6

## Zadanie 5

Wyświetl dwie listy filmów z których jedna będzie zawierała filmy z oceną > 6, a druga pozostałe.

## Zadanie 6

Wykorzystując event *onCLick* spraw aby po kliknięciu w ocene użytkownik zobaczył jakis komunikat.

## Zadanie 7
Utworz LanguageContext w którym przekażesz kod języka używanego w aplikacji ```['pl', 'en']```

## Zadanie 8
Wykorzystaj dane z LanguageContext aby wyświetlić liste filmów w innym języku.
Skorzystaj z pliku movies2.json