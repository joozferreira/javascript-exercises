const fibonacci = function(item) {
  const position = parseInt(item);

  return position < 0 ? "OOPS" : // not possible to have fibonacci of negative numbers
        position < 1 ? 0 : // Fibonacci(0) should be 0
        position < 3 ? 1 : // Covers the case of element 1 and 2 which should be 1
        fibonacci(position - 1) + fibonacci(position - 2);
};

// Do not edit below this line
module.exports = fibonacci;
