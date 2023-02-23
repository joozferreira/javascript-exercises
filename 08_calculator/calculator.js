const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;

  for (const arr of array) {
    result += arr;
  }
  return parseInt(result);
};

const multiply = function(array) {
  let result = 1;
  for (const arr of array) {
    result *= arr;
  }
  return result;
};

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
