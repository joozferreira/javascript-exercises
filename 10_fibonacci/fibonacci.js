const fibonacci = function(item) {
  const position = parseInt(item);

  return position < 1 ? "OOPS" : 
        position < 3 ? 1 : // Covers the case of element 1 and 2 which should be 1
        fibonacci(position - 1) + fibonacci(position - 2);
};

// Do not edit below this line
module.exports = fibonacci;
