const sumAll = function(...Args) {
  let result = 0;
  let start;
  let end;

  // Definition of beginning and end to avoid use of i-- on the for loop
  if (Args[0] < Args[1]) {
    start = Args[0];
    end = Args[1];
  } else {
    start = Args[1];
    end = Args[0];
  }

  // Detection of errors: If negative numbers and if input are not of type number
  if (typeof Args[0] !== 'number' || typeof Args[1] !== 'number' || Args[0] < 0 || Args[1] < 0) {
    return 'ERROR';
  }

  for (let i = start; i < end + 1; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;