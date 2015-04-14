
// 1.)
function add(num1, num2){
  return num1 + num2;
}
console.log(add(10, 5));

// 2.)
function get_max(num1, num2, num3)  {
  var max=Math.max(num1, num2, num3);
  return max;
}                                  
console.log(get_max(12,2,4));

// 3.) 
var getParity = function(number, callback) {
  setTimeout(function() {
    return callback(number % 2 === 0 ? 'even' : 'odd');
  }, 50);
};

getParity(3, function(parity) {
  console.log(parity);
});
// 4.)
var string= "BayernMunichisbetterthanChelsea";

function two_things()  {
  if (string.length <= 20)  {
    return string + string;
  } else {
    var first_half = string.length / 2;
    var half_string = string.substr(0, first_half);
    return half_string;
  }
}
console.log(two_things());
// 5.)
function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

console.log(fibonacci(7));

// 6.)

		var a = prompt("Enter value of a","1");
		var b = prompt("Enter value of b","4");
		var c = prompt("Enter value of c","4");
 
		var root_part = Math.sqrt(b * b - 4 * a * c);
		var denom = 2 * a;
 
		var root1 = ( -b + root_part ) / denom;
		var root2 = ( -b - root_part ) / denom;
 
		console.log("1st root: "+root1 +" ");
		console.log("2nd root: "+root2 +" ");

// 7.)
var string = prompt("Enter value: ", "58855585"),
    counter = {};

for (var i = 0, len = string.length; i < len; i += 1) {
    counter[string[i]] = (counter[string[i]] || 0) + 1;
}

var biggest = -1, number;
for (var key in counter) {
    if (counter[key] > biggest) {
        biggest = counter[key];
        number = key;
    }
}

console.log(number);

