/*
Method: sliding window

Write a function, that accepts a string and returns the length of the
longest substring with all distinct characters.

Time complexity: O(n)
*/

const testCases = [
  findLongestSubstring(""), // 0
  findLongestSubstring("rithmschool"), // 7
  findLongestSubstring("thisisawesome"), // 6
  findLongestSubstring("hecatinthehat"), // 7
  findLongestSubstring("bbbbbb"), // 1
  findLongestSubstring("longestsubstring"), // 8
  findLongestSubstring("thisishowwedoit"), // 6
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

// solution:

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
