/*
Method: sliding window

Write a function, that accepts 2 parameters - an array of positive integers 
and a positive integers.

This function should return the minimal length odf a contiguoussubarray of 
which the sum is greater than or equal to the integer passed to the function.

If there isn't one, return 0 instead.

Time complexity: O(n)
Space complexity: O(1)
*/

const testCases = [
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> [4, 3] is smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> [5, 4] is smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> [62] > 52
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function minSubArrayLen(arr, sum) {
  if (!arr.length) return 0;

  let total = 0,
    start = 0,
    end = 0,
    minLen = Infinity; // infinity since no length greater than this

  while (start < arr.length) {
    // if current window/span doesn't add upto given sum
    // expand window to right
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    }

    // if summation/total of current window is greater than or equal to given sum
    // calculate min length & shrink window from left
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }

    // if current total less than given sum but end reaches the end of given array
    // abort the loop
    else break;
  }

  return minLen === Infinity ? 0 : minLen;
}
