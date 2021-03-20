/*
Write a function to sort an array of integers using bubble sort.
Bubble sort put the largest one at the end and
decreases the sort scope in each loop.

Time complexity:
O(n^2) -> worst case
O(n) -> in case the array is sorted
*/

const testCases = [
  bubbleSort([12, 78, 10, 56, 89, 100, 42, 96, 3, 8, 56]),
  bubbleSort([8, 6, 2, 8, 3, -9, 5, 10, -8]),
  bubbleSort([-1, -2, 1, 2, 3, 4, 5, 6, 7, 10]),
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function bubbleSort(arr) {
  if (!arr.length) return [];
  let swap; // for optimization

  for (let i = arr.length - 1; i >= 0; i--) {
    swap = false;
    for (let j = 0; j <= i - 1; j++) {
      //   console.log(arr, "checking:", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swaping
        swap = true; // for optimization
      }
    }

    // console.log("%cOne pass done", "color: magenta", !swap ? "> no-swap" : "");

    // break if no swap occured in current pass
    if (!swap) break; // for optimization
  }

  return arr;
}
