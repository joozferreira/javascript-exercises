const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce( (product, item) => {
    return product * item;
  }, 1);
}; // could be further simplified as done with sum

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;

  if (a === 0) {
    return result;
  }

  do {
    result *= a;
    a--;
  } while (a > 0);
  return result;
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
