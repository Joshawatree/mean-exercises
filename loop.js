
var ask = require('readline-sync');
var string = ask.question('Enter a string: ');
var newString = '';
console.log('Your string: ' +string);

for (i = 0; i < string.length; i++){
   var char = string.charAt(i)+' ';        
   newString += char;
}

console.log(newString);

var user_String = ask.question('Enter another string: ');
var user_Choice = ask.question('\nNow give me a single character\n(i.e. a letter or number) in the string you just typed and i\ll tell you where the first instance of it is: ');

for (var i = 0; i < user_String.length; i++) {
	indexof = user_String.indexOf(user_Choice);
};
console.log(indexof);

var theGuess = ask.question('Now we\'ll play a little guessing game. Pick a number between 1 and 42:\n> ');

number = 42

while (number != theGuess) {
    var theGuess = ask.question('Try Again!\n> ');
} if (theGuess == number) {
	console.log('Nice, you\'re smart!');
};


console.log('\nGreat! Now let\'s log ten numbers and I\'ll tell you which one is the lowest of them all. Feel free to input any you\'d like!\n');

var array = [];

var lowest = 0;

for ( var i = 1; i <= 10; i++ ) {
	var input = ask.question( 'Enter a number: ' );
	array.push( parseInt(input) );
}

	for (var k = 0; k < array.length; k++ ) {

		if ( array[k] < array[lowest]) {
			lowest = k;
		}
	}

console.log( 'The lowest number in the list is: ' + array[lowest].toString() );

console.log('\nThanks for playing!');
