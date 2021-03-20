/*
Write a function that accepts a sorted array and a value and returns the
index at which the value exists.

This algorithm need to use binary search that is more efficient than linear search
*/

const testCases = [
  binarySearch([1, 2, 3, 4, 5], 2), // 1
  binarySearch([1, 2, 3, 4, 5], 3), // 2
  binarySearch([1, 2, 3, 4, 5], 5), // 4
  binarySearch([1, 2, 3, 4, 5], 6), // -1
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  ), // 2
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    95
  ), // 16
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    100
  ), // -1
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function binarySearch(arr, val) {
  let start = 0, step=0
    end = arr.length - 1;

  if (arr[start] <= val && arr[end] >= val) {
    while (start <= end) {
      // if (arr[start] === val) return start;
      // if (arr[end] === val) return end;

      const mid = Math.floor((start + end) / 2);

      if (arr[mid] > val) end = mid - 1;
      else if (arr[mid] < val) start = mid + 1;
      else return mid;
    }
  }

  return -1;
}
