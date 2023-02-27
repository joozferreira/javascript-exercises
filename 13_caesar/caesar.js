const caesar = function(string, shift) {
  let cypher = '';
  shift %= 26;
  // ASCII code for A = 65, Z = 90, a = 97, z = 122
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
      if (string.charCodeAt(i) + shift > 90) {
        cypher += String.fromCharCode(64 + string.charCodeAt(i) + shift - 90);
      } else if (string.charCodeAt(i) + shift < 65) {
        cypher += String.fromCharCode(91 + (string.charCodeAt(i) + shift) - 65);
      } else {
        cypher += String.fromCharCode(string.charCodeAt(i) + shift);
      }
    } else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
      if (string.charCodeAt(i) + shift > 122) {
        cypher += String.fromCharCode(96 + string.charCodeAt(i) + shift - 122);
      } else if (string.charCodeAt(i) + shift < 97) {
        cypher += String.fromCharCode(123 + (string.charCodeAt(i) + shift) - 97);
      } else {
        cypher += String.fromCharCode(string.charCodeAt(i) + shift);
      }
    } else {
      cypher += string[i];
    }
  }

  return cypher;
};

// Do not edit below this line
module.exports = caesar;
