var textField = document.getElementById('textField');
var submit = document.getElementById('submitButton');

submit.addEventListener('click', calculate, false);

function calculate(e)
{
	e.preventDefault();
	x = textField.value;
	x = eval(x);
	textField.value = x;
}

function addToField(n) 
{
	textField.value += n;
}

/*function pievalue()
{
	var y ;
	y = Math.PI;
	textField.value = y;
}
function returnValueE()
{
	var y ;
	y = Math.E;
	textField.value = y;
}*/

function power(y)
{
	x = textField.value;
	x = Math.pow(x, y);
	textField.value = x;
}

function powten()
{
	x = textField.value;
	x = Math.pow(10, x);
	textField.value = x;
}
function percentage()
{
	x = textField.value;
	x = eval(x);
	x *= 100;
	textField.value = x+"%";
}
function backspace()
{
	var z;
	x = textField.value;
	z = x.substring(0, x.length - 1);
	textField.value = z;
}
