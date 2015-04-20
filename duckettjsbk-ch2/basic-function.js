// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';
var msg2 = 'Hurry, these deals wont last long!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  var el2 = document.getElementById('message2');
  el.textContent = msg;
  el2.textContent = msg2;
}

// Call the function
updateMessage();





