// Get all the keys from document
var keys = document.querySelectorAll('a.btn');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.uneditable-input');
    console.log("Esto tiene input " +input);
		var inputVal = input.innerHTML;
    console.log("Esto tiene inputVal " +inputVal);
		var btnVal = this.innerHTML;
    console.log("Esto tiene btnVal " +btnVal);
  }}
