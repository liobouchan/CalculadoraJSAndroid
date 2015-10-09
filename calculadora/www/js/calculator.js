// Get all the keys from document
var keys = document.querySelectorAll('a.btn');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
	  // Get the input and button values
    var output = document.querySelector('.uneditable-output');
		var input = document.querySelector('.uneditable-input');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    }
    // If eval key is pressed, calculate and display the result
    else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');

      if(equation)
        output.innerHTML = eval(equation);

      decimalAdded = false;
    }

    else if(operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];
      if(inputVal != '' && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
        else if(inputVal == '' && btnVal == '-')
          input.innerHTML += btnVal;
          if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
            // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
            input.innerHTML = inputVal.replace(/.$/, btnVal);
          }
          decimalAdded =false;
        }
        else if(btnVal == '.') {
    			if(!decimalAdded) {
    				input.innerHTML += btnVal;
    				decimalAdded = true;
    			}
    		}

    else {
			input.innerHTML += btnVal;
		}
		// prevent page jumps
		e.preventDefault();
  }
}
