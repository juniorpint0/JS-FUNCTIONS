/*
* A programming language is said to have
* Frist-class functions when functions in
* that language are treated like any other
* variable.
*/

const add = function(a, b) {
	return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (x, y) => x * y;

const divide = (a, b) => a / b;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
