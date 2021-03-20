/*
Method: multiple pointers

Implement a function which accepts a sorted array and counts the unique values in
the array. There acan be negetive numbers in the array, but will always be sorted.

Time complexity: O(n)
Space complexity: O(n)
*/

// test cases:

const testCases = [
  countUniqueValues([1, 1, 1, 1, 1, 2]), // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 12, 12, 13]), // 7
  countUniqueValues([]), // 0
  countUniqueValues([-2, -1, -1, 0, 1]), // 4
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function countUniqueValues(sortedArray) {
  let sortedArrLen = sortedArray.length;

  if (!sortedArrLen) return 0;

  // initializing pointer-1 at 0th index
  let p1 = 0;

  // initializing pointer-2 at 1th index and incrementing it till the end
  // if values at both the pointers differs same pointer-1 gets incremented,
  // and replaces the value with that of indicated by pointer 2
  for (let p2 = 1; p2 < sortedArrLen; p2++) {
    if (sortedArray[p1] !== sortedArray[p2]) {
      p1++;
      sortedArray[p1] = sortedArray[p2];
    }
  }

  return p1 + 1;
}
