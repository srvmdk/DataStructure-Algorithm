/* 
Write a recursive function that accepts a number and returns the factorial of that number.
Note: factorial of zero (0!) is always 1.
*/

const testCases = [
  factorial(1), // 1
  factorial(2), // 2
  factorial(4), // 24
  factorial(7), // 5040
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
