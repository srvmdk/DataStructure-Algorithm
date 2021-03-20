/*
Method: frequency counter / multiple pointers

Write a function that accepts variable number of arguments and
check whether there are any duplicates among the arguments passed in.

Time complexity: O(n)
*/

// test cases:

const testCases = [
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates("a", "b", "c", "a"), // true
];

testCases.forEach((result) => console.log(result));

// ------------------------------------------------------------------------------------

/*
// solution: with frequency counter pattern

function areThereDuplicates(...args) {
  if (!args.length) return false;

  const obj = {};
  let output;

  for (let i of args) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }

  for (let i of args) {
    if (obj[i] > 1) return true;
  }

  return false;
}
*/

// solution: with multiple pointers pattern

function areThereDuplicates(...args) {
  const argsLen = args.length;
  if (!argsLen) return false;

  // sorting array in ascending order
  const sortedArr = args.sort((a, b) => {
    if (b > a) return -1;
  });

  let p1 = 0; // initializing pointer-1

  // initializing pointer-2 at 1th index and incrementing it till the end
  // if values at both the pointers are same, indicates duplication
  for (let p2 = 1; p2 < argsLen; p2++) {
    if (sortedArr[p1] === sortedArr[p2]) {
      return true;
    } else {
      p1++;
    }
  }

  return false;
}

/*
// solution: one liner

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/
