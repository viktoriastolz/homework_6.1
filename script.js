"use strict";

function removeElement(array, item) {
  let index;
  while ((index = array.indexOf(item)) !== -1) {
    array.splice(index, 1); 
  }
}

const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];
removeElement(array, 4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]



