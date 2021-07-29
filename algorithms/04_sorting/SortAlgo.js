/**
 * @class Sort
 * @link https://cs.slides.com/colt_steele/elementary-sorting-algorithms
 */

class Sort {
  #swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      let isSwapped = false;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          this.#swap(arr, j, j + 1);
          isSwapped = true;
        }
      }
      if (!isSwapped) break;
    }
    return arr;
  }

  selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minValIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minValIdx]) minValIdx = j;
      }
      if (minValIdx !== i) this.#swap(arr, i, minValIdx);
    }
    return arr;
  }

  insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      // first index is assumed as sorted
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > arr[j + 1]) this.#swap(arr, j, j + 1);
        else break;
      }
    }
    return arr;
  }

  #mergeHelper(arr1, arr2) {
    let p1 = 0,
      p2 = 0,
      mergedArr = [];
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) {
        mergedArr.push(arr1[p1]);
        p1++;
      } else {
        mergedArr.push(arr2[p2]);
        p2++;
      }
    }
    if (p1 < arr1.length) mergedArr = mergedArr.concat(arr1.slice(p1));
    if (p2 < arr2.length) mergedArr = mergedArr.concat(arr2.slice(p2));
    return mergedArr;
  }

  mergeSort(arr) {
    if (arr.length <= 1) return arr; // exit case
    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));
    return this.#mergeHelper(left, right);
  }

  #pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = arr[startIdx],
      swapIdx = startIdx;
    for (let i = startIdx + 1; i <= endIdx; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        this.#swap(arr, i, swapIdx);
      }
    }
    this.#swap(arr, startIdx, swapIdx);
    return swapIdx;
  }

  quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIdx = this.#pivotHelper(arr, left, right);
      this.quickSort(arr, left, pivotIdx - 1);
      this.quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
  }

  #getLargestNumLength(arr) {
    return String(arr.reduce((max, num) => (num > max ? num : max), -Infinity))
      .length;
  }

  #getDigit(num, pos) {
    return Math.floor(Math.abs(num) / 10 ** pos) % 10;
  }

  // works only for integers
  radixSort(arr) {
    const largestNumLength = this.#getLargestNumLength(arr);
    for (let i = 0; i < largestNumLength; i++) {
      let digiBucket = Array.from({ length: 10 }, () => []);
      for (let j = 0; j < arr.length; j++) {
        let digit = this.#getDigit(arr[j], i);
        digiBucket[digit].push(arr[j]);
      }
      arr = [].concat(...digiBucket);
    }
    return arr;
  }
}

const mySort = new Sort();

const testCases = [
  mySort.selectionSort([12, 78, 10, 56, 89, 1056, 42, 91, 3, 8, 56]),
  mySort.selectionSort([7, 6, 2, 8, 3, -9, 5, 5, 10, -8]),
  mySort.selectionSort([-1, -2, 1, 2, 3, 4, 5, 6, 7, 10]),
];
testCases.forEach((result) => console.log('%cOutput:', 'color: green', result));
