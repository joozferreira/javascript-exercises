const removeFromArray = function(array) {
  // convert exclusions into an array of different items
  const exclusionList = [];
  for (i = 1; i < arguments.length; i++) {
    exclusionList.push(arguments[i]);
  }

  for (let a = array.length - 1; a >= 0; a--) {
    for (let eL = 0; eL < exclusionList.length; eL++) {
      if (array[a] === exclusionList[eL]) {
        array.splice(a, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
