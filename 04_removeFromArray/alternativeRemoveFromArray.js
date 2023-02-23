const removeFromArray = function(...Args) {
    // convert exclusions into an array of different items
    const exclusionList = Args.slice(1);
    const array = Args[0];
  
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