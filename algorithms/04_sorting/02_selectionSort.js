/*
Write a function to sort an array of integers using selection sort.
Selection sort selects the minimum and checks it with whole array in each loop
and swaps the minimum with that in first position of the loop.
Hence decreases the sort scope in each loop from the start of the array.

Time complexity:
O(n^2) -> worst case
*/

const testCases = [
  selectionSort([12, 78, 10, 56, 89, 100, 42, 96, 3, 8, 56]),
  selectionSort([8, 6, 2, 8, 3, -9, 5, 10, -8]),
  selectionSort([-1, -2, 1, 2, 3, 4, 5, 6, 7, 10]),
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function selectionSort(arr) {
  // i < arr.length - 1, since the compare with last index takes place
  // while comparing 2nd last element
  for (let i = 0; i < arr.length - 1; i++) {
    let minValIdx = i;

    // start from i+1, since minValIdx assumes ith place value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIdx]) {
        minValIdx = j;
      }
    }

    // console.log(arr, `checking: ${arr[i]}, ${arr[minValIdx]}`);
    if (minValIdx !== i) {
      [arr[i], arr[minValIdx]] = [arr[minValIdx], arr[i]]; // swaping
    }

    // console.log("%cOne pass done", "color: magenta");
  }
  return arr;
}
