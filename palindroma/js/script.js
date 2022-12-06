let word = prompt('inserisci la parola');
console.log(word);

function invetWord(ex){
	let invented_word = ex.split('').reverse('').join('');
	return invented_word
}

let invented_word = invetWord(word);

if (invented_word == word) {
	console.log('la parola è palindroma');
}
else {
	console.log('la parola non è palindroma');
}