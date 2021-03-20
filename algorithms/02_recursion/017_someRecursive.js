/* 
Write a recursive function that accepts an array and a callback.

The function returns true if a single value in the array returns true
when passed to callback.
*/

// callbacks:
const isOdd = (val) => val % 2 !== 0;

const testCases = [
  someRecursive([1, 2, 3, 4], isOdd), // true
  someRecursive([4, 6, 8, 9], isOdd), // true
  someRecursive([4, 6, 8], isOdd), // false
  someRecursive([4, 6, 8], (val) => val > 10), // false
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:
function someRecursive(arr, cb) {
  if (!arr.length) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}
