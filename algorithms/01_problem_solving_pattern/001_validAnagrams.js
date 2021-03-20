/* 
Method: frequency counter

Write a function to determine if the second string is an anagram of the first.
An anagram is a word, phase or name formed by rearranging the letters of another,
such as 'cinema', formed from 'iceman'.

Time complexity: O(n)
*/

// test cases:

const testCases = [
  validAnagram("", ""), // true
  validAnagram("aaz", "zza"), // false
  validAnagram("anagram", "nagaram"), // true
  validAnagram("rat", "cat"), // false
  validAnagram("awesome", "awesom"), // false
  validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"), // false
  validAnagram("qwerty", "qeywrt"), // true
  validAnagram("texttwisttime", "timetwisttext"), // true
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function validAnagram(arg1, arg2) {
  // return false if length of each arguments doesn't match
  if (arg1.split("").length !== arg2.split("").length) return false;

  const obj = {};

  // capturing occurances of letters in arg1
  for (let letter of arg1) {
    !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
  }

  // matching occurances of letters of arg2 with arg1
  for (let letter of arg2) {
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter]--;
    }
  }

  return true;
}
