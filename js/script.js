// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (let i = 1; i <= 100; i++) {
    let _number
    if (i % 3 === 0) {
        _number = "Fizz";
    } else if (i % 5 === 0) {
        _number = "Buzz";
    } else if (i % 15 === 0) {
        _number = "FizzBuzz";
    } 
    console.log(i, _number);
}
