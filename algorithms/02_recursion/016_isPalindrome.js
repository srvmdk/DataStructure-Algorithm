/* Write a recursive function that checks if a string is palindrome. */

const testCases = [
  isPalindrome("awesome"), // false
  isPalindrome("foobar"), // false
  isPalindrome("tacocat"), // true
  isPalindrome("amanaplanacanalpanama"), // true
  isPalindrome("amanaplanacanalpandemonium"), // false
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function isPalindrome(str) {
  if (!str) return;

  // rejection criteria
  if (str[0] !== str[str.length - 1]) return false;

  //acceptance criteria
  if ((str.length === 2 && str[0] === str[1]) || str.length === 1) return true;

  return isPalindrome(str.slice(1, str.length - 1));
}
