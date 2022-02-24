// * creare un ciclo for che stampi in console i numeri da 1 a 100
for (let i = 0; i < 101; i++) {
	// * creare una condizione if all'interno del ciclo per i seguenti casi :
	if (( i % 3 == 0) && (i % 5 == 0)) { // ! per i numeri multipli sia di 3 che di 5 stampare "FizzBuzz"
		console.log('fizz');
	} else if (i % 5 == 0) { 	// ! per i numeri multipli di 5 stampare "buzz"
		console.log('buzz');
	} else if (i % 3 == 0) { // ! per i numeri multipli di 3 stampare "fizz"
		console.log('fizzbuzz');
	} else {
		console.log(i);
	}
}


// * rappresentare il programma nel DOM