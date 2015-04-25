console.log('\nHello! My name is Lisa. I\'m a program--\n a very simple one at that. Please help me get to know you!\n');

var ask = require('readline-sync');
var firstName = ask.question('What\'s your first name? ');
var lastName = ask.question('and your last name '+ firstName + '? ');
var fullname = firstName + ' ' + lastName;

console.log('Well, nice to meet you finally, ' + fullname + '.\n');
var age = ask.question('How old are you? ');
console.log('Great! I know that you\'re ' + age + ' years old.\n');
var typing = ask.question( 'Give me a short background on you ' + firstName + '.\nI\'ll record what you type and tell you how long of a string that is.\n\tNeat huh!? Ready, set... type: \n\t\t');
console.log('\nThe length of what you just typed was ' + typing.length + ' characters long.\naren\'t I just somethin\' else?');
console.log('I can also spit your string back to you based on parameters you give me.\nFor example, choose a point in your string for me to return.\n You tell me-- Choose a number between 0 and ' + typing.length);
var return_chars = ask.question('');
var subString = typing.substring(return_chars, typing.length);

console.log('\nyour string length from the index you chose till the end of your string is: \n' + '"'+subString +'"');

console.log('Thanks for Introducting yourself. I\'m glad I can show you how useful I am!\n\n\tGood luck on your coding journey! Onward!\n');
