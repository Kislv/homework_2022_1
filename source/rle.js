'use strict';

/**
 * The function prints the character and the number of repetitions,
 * if the length exceeds 9, the function will print several times "X9" and at the end,
 * if necessary, "XN", where N is the remainder of the sequence length divided by 9.
 * @param {string} charSequence  Sequence of identical characters
 * @param {string} character  The symbol that makes up the sequence
 * @returns {string} A string that replaces the original sequence
 */
function printCharacterAndLength(charSequence, character) {
  if (charSequence.length > 1 && charSequence.length < 10) {
    return character + charSequence.length;
  }

  if (charSequence.length >= 10) {
    let ninesCounter = (charSequence.length - (charSequence.length % 9)) / 9;
    let result = '';

    for (let i = 0; i < ninesCounter; ++i) {
      result += character + '9';
    }

    if (charSequence.length % 9 > 1) {
      result += character + String(charSequence.length % 9);
      return result;
    }

    if(charSequence.length % 9 == 1){
      result += character;
      return result;
    }
    return result;
  }
  return character;
}

/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string} the transformed string. For example: 'AB2C4'
 */
const rle = function (str) {
  if (typeof str !== 'string' || arguments.length != 1) {
    return null;
  }
  str = str.replace(/(.)\1*/g, printCharacterAndLength);
  return str;
};
