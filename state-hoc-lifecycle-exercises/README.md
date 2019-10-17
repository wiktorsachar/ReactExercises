# Lab 06

## Zadanie 1
Stworz komponent, który będzie wyświetlal przycisk oraz informacje o tym ile razy został wciśnięty.
Pamiętaj o zbindowaniu funkcji obslugujacej klikniecie.

## Zadanie 2
Przerób komponent z `Zadanie 2` w taki sposób aby po 20 kliknęciu przycisk został zablokowany. Możesz wykorzystać do tego atrybut `disabled`.

## Zadanie 3
Zastosuj w poprzednim zadaniu wszystkie poznane Lifecycle Hooks i zaobserwuj kiedy zostają wywołane.

## Zadanie 4
Spraw aby komponent z zadania 3 reagował tylko w przypadku parzystej liczby kliknięć. Wykorzystaj `shouldComponentUpdate`

## Zadanie 5
W komponencie rodzica dodaj 2 przyciski ktore ukryja i pokaza twoj Component z zadania 4: wroc do zadania 2 i zobacz co sie zmienilo.
Pamiętaj o zbindowaniu funkcji obslugujacej klikniecie.

## Zadanie 6
Pracując na kodzie z folderu zad02.
Zaimplementuj HOC (Higher Order Component) którego celem będzie wstrzyknięcie do komponentu informacji o używanym w aplikacji języku. Informacje o języku wyciągnij z LanguageContextu

## Zadanie 7
Zamień component App na Class Component oraz ustaw mu wewnętrzny stan language. Dodaj do strony dwa przyciski wyboru języka PL i EN. Kliknięcie powinno zmienić stan komponentu oraz język na stronie.

## Zadanie 8
Przerób component Rating w taki sposób aby po zmianie oceny liczba gwiazdek została zapamiętana. Stan może być przechowywany w Componencie Post.

## Zadanie 9
Dodaj prosty mechanizm filtrowania listy filmów po nazwie. Filtrowanie powinno byc natychmiastowe po wpisaniu kolejnej litery.