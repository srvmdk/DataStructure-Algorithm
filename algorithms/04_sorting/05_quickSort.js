let testCase = Array.apply(null, { length: 10 }).map(() =>
  Math.floor(Math.random() * 100)
);

console.log("%cInput array:", "color: green", testCase);
console.log("%cSorted array:", "color: green", quickSort(testCase));

// -----------------------------------------------

// Solution:

function pivotHelper(arr, start, end) {
  // this method sorts the position of pivot and modified the sub-array
  // and returns pivot positon

  // swaping function
  const swap = (arr, p1, p2) => ([arr[p1], arr[p2]] = [arr[p2], arr[p1]]);

  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivotHelper(arr, left, right);

    // sorting left segment of the pivot position
    quickSort(arr, left, pivotIdx - 1);
    // sorting right segment of the pivot position
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}
