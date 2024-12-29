"use strict";

function removeChars(inputString, charsToRemove) {
  let result = '';
  
  for (const char of inputString) {
    if (!charsToRemove.includes(char)) {
      result += char; 
    }
  }

  return result;
}

const userInput = prompt("Enter a string:", "").trim();
if (!userInput) {
  alert("Input canceled or empty string provided.");
} else {
  const charsToRemoveInput = prompt("Enter characters to remove (separated by commas):", "").trim();
  if (!charsToRemoveInput) {
    alert("Input canceled or empty characters to remove provided.");
  } else {
    const charsToRemove = charsToRemoveInput.split(',')
      .map(char => char.trim())
      .filter(char => char.length === 1);

    if (charsToRemove.length === 0) {
      alert("No valid characters to remove provided.");
    } else {
      const result = removeChars(userInput, charsToRemove);
      alert(`Result: ${result}`);
    }
  }
}


