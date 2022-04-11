// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
const rowWrapper = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    let _number; // qui vale undefined
    if (i % 15 === 0) {
        _number = "FizzBuzz";
    } else if (i % 3 === 0) {
        _number = "Fizz";
    } else if (i % 5 === 0) {
        _number = "Buzz";
    } else {
        _number = i;
    }
    console.log(i, _number); // sicuramente non è più undefined
    // BONUS 1
    // Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    // BONUS 2
    // Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. 
    rowWrapper.innerHTML +=  `<div class="box ${_number}">${_number}</div>`;
}
