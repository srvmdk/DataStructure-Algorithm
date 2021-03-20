let testCase = Array.apply(null, { length: 10 }).map(() =>
  Math.floor(Math.random() * 10000)
);

testCase = [5465, 12, 560, 3, 89, 210, 45, 782];

console.log("%cInput array:", "color: green", testCase);
console.log("%cSorted array:", "color: green", radixSort(testCase));

// -----------------------------------------------

// Solution:

function getMaxDigitCount(nums) {
  let maxDigitCount = 0;
  nums.forEach((num) => {
    if (num === 0) return 1;
    let digitCount = Math.floor(Math.log10(Math.abs(num))) + 1; // counts digits in num
    maxDigitCount = Math.max(maxDigitCount, digitCount);
  });

  return maxDigitCount;
}

function getDigit(num, place) {
  // gets digit for provided place, eg 1's place, 10's place, etc.
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(arr) {
  let sortedArr = arr;

  // find max digit count
  const maxDigitCount = getMaxDigitCount(arr);

  // iterates based on max digit place available
  for (let i = 0; i < maxDigitCount; i++) {
    // allocate numbers in bucket as per array index based on digit selected
    let digitBucket = Array.from({ length: 10 }, () => []);
    arr.forEach((num) => {
      let digit = getDigit(num, i);
      digitBucket[digit].push(num);
    });
    // console.log(digitBucket);

    // concat array into single array after bucket allocation
    arr = [].concat(...digitBucket);
    // console.log(arr);
  }

  return arr;
}
