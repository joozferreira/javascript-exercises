const palindromes = function (string) {
  let adjustedString = '';
  for (i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 59 && string.charCodeAt(i) < 91) {
      adjustedString += string[i];
    } else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
      adjustedString += string[i].toUpperCase();
    }
  }

  let check = false;

  if (adjustedString.length % 2 === 0) {
    for (let i = 0; i < adjustedString.length / 2; i++) {
      if (adjustedString[i] === adjustedString[(adjustedString.length - 1) - i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
  } else {
    for (let i = 0; i < Math.floor(adjustedString.length / 2); i++) {
      if (adjustedString[i] === adjustedString[(adjustedString.length - 1) - i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
  }

  return check;
};

// Do not edit below this line
module.exports = palindromes;
