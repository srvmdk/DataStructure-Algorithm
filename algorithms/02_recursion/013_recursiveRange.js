/* 
Write a recursive function that accepts a number and adds up all the 
numbers from 0 to the number passed to the function.
*/

const testCases = [
  recursiveRange(6), // 21
  recursiveRange(10), // 55
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
