/*
Method: multiple pointers

Write a function that takes 2 strings and check whether character in the first
string form a subsequence of the characters in the second string. In other words,
the function should check whether character in the first string appear somewhere
in the second string, without their order changing.

Time complexity: O(n+m)
Space complexity: O(1)
*/

// test cases:

const testCases = [
  isSubsequence("hello", "hello world"), // true
  isSubsequence("sing", "sting"), // true
  isSubsequence("abc", "abracadabra"), // true
  isSubsequence("abc", "acb"), // false (order matters)
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function isSubsequence(str1, str2) {
  if (!str1 || !str2) return false;

  // initializing pointers for str1 & str2
  let p1 = 0,
    p2 = 0;

  while (p2 < str2.length) {
    if (p1 === str1.length - 1) return true;
    if (str2[p2] === str1[p1]) p1++;
    p2++;
  }

  return false;
}

/*
// solution: recursive but not space O(1)

function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }
*/
