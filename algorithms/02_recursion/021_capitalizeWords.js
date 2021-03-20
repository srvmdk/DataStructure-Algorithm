/* Write a recursive function to capitalize each word in an array of worrds. */

// array of words:
let words = ["i", "am", "learning", "recursion"];

const testCases = [
  capitalizeWords(words), // ['I', 'AM', 'LEARNING', 'RECURSION']
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function capitalizeWords(arr) {
  if (!arr.length) return [];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}
