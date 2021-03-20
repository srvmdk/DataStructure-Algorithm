/* 
Write a recursive function that accepts an array of numbers and
returns the product of them all.
*/

const testCases = [
  productOfArray([1, 2, 3]), // 6
  productOfArray([1, 2, 3, 10]), // 60
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function productOfArray(arr) {
  if (!arr.length) return 0;

  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}
