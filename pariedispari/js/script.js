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