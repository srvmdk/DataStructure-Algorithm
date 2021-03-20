/* 
Write a recursive function that accepts an array of arrays and
returns a new array with all values flattened.
*/

const testCases = [
  flatten([1, 2, 3, [4, 5]]), // [1, 2, 3, 4, 5]
  flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
  flatten([[1], [2], [3]]), // [1,2,3]
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), // [1,2,3]
  flatten([1, 2, [3, 4], [[5]]]), // [1, 2, 3, 4, 5]
  flatten([[1], [2], 3]), // [1, 2, 3]
  flatten([[[1], [[[2]]], [[[[[[[3]]]]]]]]]), // [1, 2, 3]
];

testCases.forEach((result) => console.log(result));

// --------------------------------------------------------------------------

// Solution:

function flatten(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(flatten(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}
