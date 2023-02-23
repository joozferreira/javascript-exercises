const convertToCelsius = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  }

  let celsius;

  celsius = (temp - 32) * 5 / 9;

  // .toFixed defines the number of decimals but converts the result to a string, parseFloat() converts it back to a number
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  }

  let fahrenheit;

  fahrenheit = (temp * 9 / 5 + 32);

  // .toFixed defines the number of decimals but converts the result to a string, parseFloat() converts it back to a number
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
