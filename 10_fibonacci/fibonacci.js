const fibonacci = function(item) {
  if (parseInt(item) < 1) {
    return 'OOPS';
  }

  if (parseInt(item) === 1 || parseInt(item) === 2) {
    return 1;
  } else {
    return fibonacci(parseInt(item) - 1) + fibonacci(parseInt(item) - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
