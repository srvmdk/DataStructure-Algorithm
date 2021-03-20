/*
Write a function to sort an array of integers using selection sort.
Insertion sort selects a number from the array and places it in the left
half of sorted array.
*/

const testCases = [
  insertionSort([12, 78, 10, 56, 89, 100, 42, 96, 3, 8, 56]),
  insertionSort([8, 6, 2, 8, 3, -9, 5, 10, -8]),
  insertionSort([-1, -2, 1, 2, 3, 4, 5, 6, 7, 10]),
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function insertionSort(arr) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  for (let i = 1; i < arr.length; i++) {
    let posOfSelected = i;

    for (let j = i - 1; j >= 0 && arr[j] > arr[posOfSelected]; j--) {
      swap(arr, posOfSelected, j);
      posOfSelected = j;
    }
  }

  return arr;
}
