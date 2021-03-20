/* Merge sort */

// test case
const testArr = Array.apply(null, { length: 6 }).map(() =>
  Math.floor(Math.random() * 25)
);

// display input array
console.log("%cInput array:", "color: green", testArr);

// display sorted array
const sortedArr = mergeSort(testArr);
console.log("%cSorted array:", "color: green", sortedArr);

// --------------------------------------

// Solution:

function merge(arr1, arr2) {
  // this function takes in 2 sorted arrays and merge them into single sorted array

  let mergedArr = [];
  let p1 = 0,
    p2 = 0;

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

function mergeSort(arr, side = "input") {
  console.log(`%cto sort ${side.toUpperCase()}`, "color: violet", arr);

  if (arr.length <= 1) return arr;

  const midPos = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, midPos), "left");
  const right = mergeSort(arr.slice(midPos), "right");

  console.log("%csorted", "color: magenta", { left, right });

  return merge(left, right);
}
