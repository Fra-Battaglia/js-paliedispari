//1 - permettere con un prompt la scelta tra pari e dispari
let odd_even = prompt('inserisci pari o dispari');

let index = 0;

while (index < 5){
	if (odd_even == 'pari' || odd_even == 'dispari'){
		console.log(odd_even);
		index = 5;
	}
	else {
		alert('inserisci un valore valido');
		prompt('inserisci pari o dispari')
	}
}

//2 - permettere con un prompt l'inserimeto di un numero da 1 a 5
let number = parseInt(prompt('inserisci un numero da 1 a 5'));

let i = 0;

while (i < 2) {
	if (number >= 1 && number<= 5) {
		console.log(number);
		i = 2;
	}
	else {
		alert('inserisci un valore valido');
		prompt('inserisci un numero da 1 a 5');
	}
}