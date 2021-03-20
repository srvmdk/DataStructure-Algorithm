/* Write a recursive function that reverses a string */

const testCases = [
  reverse("awesome"), // 'emosewa'
  reverse("rithmschool"), // 'loohcsmhtir'
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function reverse(str) {
  if (str.length === 1) return str[0];
  return reverse(str.slice(1)) + str[0];
}
