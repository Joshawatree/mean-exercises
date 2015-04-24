// practice with parseInt, switch statements, if/else statements, functions, etc.


var score = prompt("enter your score here");
var msg;

score = parseInt(score);

if (!score) {
  msg = "please tell me the score, common'!";
} else if (score < 70) {
  msg = 'You should really study more...'; 
} else {
  msg = 'great job! keep up the work!';
}

alert(msg);


var score = prompt("Enter your score here");
var pass = 49;
var score = parseInt(score);
var msg ='';

function congrats() {
  msg += 'congrats, you passed!';
  alert(msg);
  
}
function encourage() {
  msg += 'that is shit bro...';
  alert(msg);
}

if (score >= pass) {
  congrats();
} else {
  encourage();
}

var msg;
var level = parseInt(prompt());

switch (level) {
    
  case 1:
    msg = 'good luck on level 2!';
    break;
    
  case 2:
    msg = 'good luck on level 3!';
    break;
    
  case 3:
    msg = 'final round, almost there!';
    break;
    
    default:
    msg = "good luck!";
    break;
}

console.log(msg);


