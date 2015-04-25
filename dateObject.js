var today = new Date();
var day = today.toTimeString() + " " + today.getFullYear();
console.log(day);

var today = new Date ();
var year = today.getFullYear();
var est = new Date('Sep 14, 1991 16:51:30');

var difference = today.getTime() - est.getTime();
difference = (difference/ 31556900000);

var message = Math.floor(difference) + " years rollin' like a certifiable G.";

console.log(message);