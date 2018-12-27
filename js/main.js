// Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

// Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

// https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

// Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

// Zadanie domowe zrób za pomocą GitHub Pages.

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery


$(function () {
    $('#przycisk').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane-programisty').html('<p> Imię: ' + data.imie + '</p>');
            $('#dane-programisty').append('<p> Nazwisko: ' + data.nazwisko + '</p>');
            $('#dane-programisty').append('<p> Zawód: ' + data.zawod + '</p>');
            $('#dane-programisty').append('<p> Firma: ' + data.firma + '</p>')
        });
    })
})






