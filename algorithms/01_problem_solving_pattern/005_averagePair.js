/*
Method: multiple pointers

Given a sorted array of integers and target average, determine if there is a
pair of values in the array where average of the pair equals the target average.
There may be more tham one pair that matches the average target.

Time complexity: O(n)
Space complexity: O(1)
*/

// test cases:

const testCases = [
  averagePair([1, 2, 3], 2.5), // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
  averagePair([], 4), // false
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function averagePair(sortedArr, avg) {
  const arrLen = sortedArr.length;
  if (!arrLen) return false;

  let start = 0,
    end = arrLen - 1;

  while (start < end) {
    const sum = sortedArr[start] + sortedArr[end];
    if (sum < avg * 2) {
      start++;
    } else if (sum > avg * 2) {
      end--;
    } else {
      return true;
    }
  }

  return false;
}
