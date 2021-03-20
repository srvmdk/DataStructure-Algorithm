/* 
Write a recursive function called power that accepts a base and an exponent.
The function should mimic the functionality of Math.pow()
Note: Ignore negetive bases & exponents
*/

const testCases = [
  power(0, 0), // 1
  power(2, 2), // 4
  power(2, 4), // 16
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
