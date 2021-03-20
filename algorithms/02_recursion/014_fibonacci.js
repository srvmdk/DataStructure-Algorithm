/* 
Write a recursive function that accepts a number and returns the nth number
in the fibonacci sequence.

Fibonacci sequence starts with 1, 1 and where every number thereafter is equal
to sum of the previous 2 numbers.
*/

const testCases = [
  fib(4), // 3
  fib(10), // 55
  fib(28), // 317811
  fib(35), // 9227465
  fib(1), // 1
  fib(0), // 1
];

testCases.forEach((result) => console.log("%c" + result, "color: green"));

// --------------------------------------------------------------------------

// Solution:

/* using helper method */
// function fib(num) {
//   if (!num) return 1;
//   let fibSeries = [1, 1];

//   function inner() {
//     let len = fibSeries.length;
//     if (len === num) return fibSeries[num - 1];
//     fibSeries.push(fibSeries[len - 1] + fibSeries[len - 2]);
//     return inner();
//   }

//   return inner();
// }

/* using pure recursion */
// function fib(n, fibArr = []) {
//   if (n <= 2) return 1;

//   // initializing fibonacci series
//   if (!fibArr[0] || !fibArr[1]) fibArr = [1, 1];

//   let len = fibArr.length;
//   if (len >= n) return fibArr[n - 1];

//   return fib(n, fibArr.concat(fibArr[len - 1] + fibArr[len - 2]));
// }

/* Optimised solution */ 
function fib(n) {
    if (n<=2) return 1;
    return fib(n-1) + fib(n-2)
}