function isLetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

const palindromes = function (string) {
  let stringReversed = "";
  let stringOnlyLetters = "";

  for (i = 0; i <= string.length - 1; i++) {
    const currentChar = string.charAt(i);
    if (isLetter(currentChar)) {
      stringOnlyLetters += string.charAt(i);
    }
  }

  for (i = string.length - 1; i >= 0; i--) {
    const currentChar = string.charAt(i);
    if (isLetter(currentChar)) {
      stringReversed += string.charAt(i);
    }
  }
  return stringOnlyLetters.toLowerCase() === stringReversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
