/*
Method: sliding window

Write a function, using given array of integers & a number, which finds the 
maximum sum of a subarray with the length of the number passed to the function.

Note: The sub array must consists of consecutive elements from the original array.
eg: [100,200,300] is a sub array of original array, but [100,300] is not.

Time complexity: O(n)
Space complexity: O(1)
*/

// test cases:

const testCases = [
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3), // null
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function maxSubarraySum(arr, len) {
  const arrLen = arr.length;
  if (arrLen < len) return null;

  // initializing max sum and calculating sum of first 'len' numbers
  let maxSum = 0;
  for (let n = 0; n < len; n++) {
    maxSum += arr[n];
  }

  let tempSum = maxSum;
  for (let i = len; i < arrLen; i++) {
    tempSum = tempSum - arr[i - len] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
