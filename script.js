"use strict";

function removeChars(inputString, charsToRemove) {
  if (typeof inputString !== 'string') {
    console.error('Invalid input: the first argument must be a string.');
    return inputString;
  }

  if (!Array.isArray(charsToRemove)) {
    console.error('Invalid input: the second argument must be an array of characters.');
    return inputString;
  }

  for (var i = 0; i < charsToRemove.length; i++) {
    if (typeof charsToRemove[i] !== 'string' || charsToRemove[i].length !== 1) {
      console.error('Invalid input: all elements in the second argument must be single characters.');
      return inputString;
    }
  }

  const regex = new RegExp('[' + charsToRemove.join('') + ']', 'g');

  return inputString.replace(regex, '');
}

const userInput = " hello world";
const charsToRemove = ['l', 'd'];
const result = removeChars(userInput, charsToRemove);

console.log(result);



