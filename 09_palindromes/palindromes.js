const palindromes = function (string) {
  let adjustedString = '';
  for (i = 0; i < string.length; i++) {
    if (string.toUpperCase().charCodeAt(i) > 59 && string.toUpperCase().charCodeAt(i) < 91) {
      adjustedString += string[i].toUpperCase();
    }
  }

  let reversedAdjusted = adjustedString.split("").reverse().join("");

  return (adjustedString === reversedAdjusted) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
