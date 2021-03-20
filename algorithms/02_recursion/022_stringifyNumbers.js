/*
Write a function that takes in an object and finds all of the values
which are numbers and converts them to strings using recursion.
*/

// input object:
const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const testCases = [stringifyNumbers(obj)];

// Output:
/*
{
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};
*/

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function stringifyNumbers(obj) {
  const newObj = {};

  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
