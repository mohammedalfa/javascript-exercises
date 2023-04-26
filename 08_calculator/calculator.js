const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((prod, num) => prod * num, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	return a <= 0 ? 1 : a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};