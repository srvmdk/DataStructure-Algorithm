/*
Write a recursive function that accepts an object and returns an array of
all the values in the object that have a type of string.
*/

// input object:
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const testCases = [
  collectStrings(obj), // ["foo", "bar", "baz"])
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function collectStrings(obj) {
  let arr = [];

  for (let key in obj) {
    const type = Object.prototype.toString.call(obj[key]);
    if (type === "[object Object]") {
      arr = arr.concat(collectStrings(obj[key]));
    }
    if (type === "[object String]") {
      arr.push(obj[key]);
    }
  }

  return arr;
}
