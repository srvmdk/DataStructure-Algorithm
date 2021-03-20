/* Write a recursive function that capitalizes each word in a given array */

const testCases = [
  capitalizeFirst(["car", "taco", "banana"]), // ['Car','Taco','Banana']
];

testCases.forEach((result) =>
  console.log("%cOutput:", "color: green", result)
);

// --------------------------------------------------------------------------

// Solution:

function capitalizeFirst(arr) {
  let newArr = [];
  if (!arr.length) return [];
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}
