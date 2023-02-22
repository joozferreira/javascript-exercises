const repeatString = function(string, num) {
  outputString = '';
  
  // Check if input num is negative. In this case, it should stop and retrieve error, according to test 5!
  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    outputString += string;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
