// // 1.a)
// var nums;
// nums=[1,2,3,4,5];
// console.log(nums[1]);
// // writes to the console: 2; 
// //2 = nums.index[1] of the 4 values.

// // 1.b)
// var nums = [1,2,3,4,5]; 
// var arrayLength = nums.length;
// for (var i = 0; i < arrayLength; i++ ) {
//   console.log(nums[i]);
// }

// 1.c)
var numsArray = [1,2,3,4,5];
var sum = 0;
function sumOfMyArray() {
    for (var i = 0; i < numsArray.length; i++) {
      sum += numsArray[i];
    }
    // return sum;
}
sumOfMyArray();
console.log(sum /*sumOfMyArray()*/);

// 1.d)
var numArray = [1,2,3,4,5]; 
var max = Math.max.apply(Math, numArray); 
console.log(max);
numArray.splice(numArray.indexOf(max), 1);
console.log(numArray);
// 1.e)
var a = [1,2,3,4,5];
var average = a.reduce(function(a, b)  {
  return a + b;
}, 0) /  a.length;
console.log('The average is: ' + average);
a.push('I pushed to the array: ' + average);
console.log(a);

// // 2.a)
// var string = 'Home sweet home';
// console.log(string.split(' '));
// // 2.b)
// var str = "Home is where the heart is";
// var res = str.split(" ");
// console.log(res);
// res.sort();
// console.log(res);
// // 2.c)
// var str = "Home is where the heart is";
// var res = str.split(" ");
// console.log(res);
// res.sort();
// console.log(res);
// var method = res.join();
// console.log(method);

// 3.)
var a = ['coding campus'];
var myvar = a.join('');

function reverse(myvar) {
  var o = '';
  for (var i = myvar.length - 1; i >= 0; i--)
    o += myvar[i];
  return o;
}

console.log(reverse(myvar));
// 4.)
var myArray = [];
var arrayMax = 2;
var limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random()*limit));
}
console.log(myArray);
// 5.)
var grid = [];
var rows = 2;
var columns = 2;

for(var i = 0; i < rows; i++){
  grid.push([]);
  for (var j = 0; j < columns; j++){
    grid[i].push(i + ',' + j);
  }
}
console.log(grid);
// 6.)
// ?







