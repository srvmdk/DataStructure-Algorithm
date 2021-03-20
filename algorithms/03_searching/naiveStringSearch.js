/*
Write a function to find a pattern within a string.
*/

const testCases = [
  naiveStringSearch("wowomgwomg", "omg"),
  naiveStringSearch("lorie loled", "lol"),
];

testCases.forEach((result) => console.log("%cOutput:", "color: green", result));

// --------------------------------------------------------------------------

// Solution:

function naiveStringSearch(str, pattern) {
  const strLen = str.length,
    patternLen = pattern.length;

  let count = 0;
  let idxLong = 0,
    idxShort = 0;

  while (idxLong < strLen) {
    // console.log(
    //   `${idxLong}: ${str[idxLong]} <> ${idxShort}: ${pattern[idxShort]}`
    // );
    if (str[idxLong] === pattern[idxShort]) {
      if (idxShort === patternLen - 1) {
        // once the whole pattern matches
        count++;
        idxShort = 0;
      } else {
        // pattern match in progress
        idxShort++;
      }
    } else {
      idxShort = 0;
    }

    idxLong++;
  }

  return count;
}
