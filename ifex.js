console.log('\nHello fellow sentient being!');


var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good eveneing!'
} else if(hourNow > 12) {
	greeting = 'Good afternoon! Have you had brunch/lunch?... Err don\'t answer that.';
}else if(hourNow > 0) {
	greeting = 'Morning, you weirdo...';
}else{
	greeting = 'welcome!';
};
console.log(greeting + '\nWow, I\'m pretty damn smart. I can tell what time it is\nAND give an informed and appropriate greeting based on the time of day!');

console.log('\n\nIn this program you\'ll be prompted to enter two numbers.\nI\'ll use my savvy computer magic to tell you which one is lowest!\n\tSo... Let\'s do it.');

var ask = require('readline-sync');

var num1 = ask.question('Enter your first number: ') ;
var num2 = ask.question('Enter your second number: ');

console.log('\nThe lower of the two numbers you typed is ' + Math.floor(num1, num2) + '.\n\nI\'m amazeBALLZ!\n');

console.log('Now, since you don\'t seem to be too awstruck by that feat, I\'ll really blow your mind with a voting App that I\'ve cooked-up, just for you ;)');

var string = 'Bush, Webb, Clinton';

console.log('Choose a candidate to vote for from the following list: ' + string);

var choice = ask.question('>>');

	if (choice == 'Bush')  {
		console.log('Trick question... Do you pay attention at all? He\'s not even running');
}	else if (choice == 'Clinton') {
		console.log('Don\'t her female hormones scare you?');
}	else if (choice == 'Webb') {
		console.log('There\'s a great all american choice!');
} else {
		console.log('There are three candidates you tard... that\'s not one of them!');
};

console.log('\n\n\n---------------------------------------------------------------\n\t\tThank you for using this program!\n---------------------------------------------------------------');

