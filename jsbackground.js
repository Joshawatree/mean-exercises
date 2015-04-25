var readlineSync = require('readline-sync');
 
var test = readlineSync.question('May I have your e-mail? :');

if (test === 'joshawa.roberts@gmail.com')  {
	console.log('Success');
} else {console.log('error')};