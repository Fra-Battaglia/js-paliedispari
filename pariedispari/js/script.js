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

//3 - generare un numero random per il computer
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computer_number = random(1, 5);
console.log(computer_number);

//4 - somma i 2 numeri
let sum = number + computer_number;
console.log(sum);

//5 - SE l'utente ha scelto pari o dispari e la somma dei numeri corrisponde alla scelta mostrare il messaggio 'Hai vinto'
if (odd_even == 'pari' && sum % 2 == 0) {
	console.log('hai vinto');
}
else if (odd_even == 'dispari' && sum % 2 != 0) {
	console.log('hai vinto');
}

//5.1 - ALTRIMENTI mostrare il messaggio 'Hai perso'
else {
	console.log('hai perso');
}