/*
Method: same frequency

Write a function to find out if the given 2 positive integers have
same frequency of digits.

Time complexity: O(n)
*/

// test cases:

const testCases = [
  sameFrequency(128, 281), // true
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222), // false
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function sameFrequency(num1, num2) {
  const num1Str = num1.toString(),
    num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  const obj1 = {},
    obj2 = {};

  for (let m of num1Str) {
    !obj1[m] ? (obj1[m] = 1) : obj1[m]++;
  }

  // using same frequency pattern
  for (let n of num2Str) {
    !obj2[n] ? (obj2[n] = 1) : obj2[n]++;
  }

  for (let idx in num1Str) {
    if (obj1[idx] !== obj2[idx]) return false;
  }

  /*
  // using frequency counter pattern 
  for (let n of num2Str.split("")) {
    if (!obj1[n]) return false;
    else obj1[n]--;
  }
  */

  return true;
}
