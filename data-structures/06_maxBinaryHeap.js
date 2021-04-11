class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /* Define insert property
    > Push the value into the values property on the heap
    > Bubble Up:
      > Create a variable called index which is the length of the values property - 1
      > Create a variable called parentIndex which is the floor of (index-1)/2
      > Keep looping as long as the values element at the parentIndex is less than
        the values element at the child index
          > Swap the value of the values element at the parentIndex with the value
            of the element property at the child index
          > Set the index to be the parentIndex, and start over!
  */
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1,
      parentIndex = Math.floor((index - 1) / 2);
    const arr = this.values;
    while (arr[parentIndex] < arr[index]) {
      [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  /* Define extractMax or removal
    > Swap the first value in the values property with the last one.
    > Pop from the values property, so you can return the value at the end.
    > Have the new root "sink down" to the correct spot.
      > Your parent index starts at 0 (the root)
      > Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
      > Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
      > If the left or right child is greater than the element...swap.
        If both left and right children are larger, swap with the largest child.
      > The child index you swapped to now becomes the new parent index.  
      > Keep looping and swapping until neither child is larger than the element.
    > Return the old root!
    */
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let parentIndex = 0;
    const length = this.values.length;

    while (true) {
      const parent = this.values[parentIndex];
      const leftChildIndex = 2 * parentIndex + 1,
        rightChildIndex = 2 * parentIndex + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > parent) swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swapIndex && rightChild > parent) ||
          (!!swapIndex && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (!swapIndex) break;

      [this.values[parentIndex], this.values[swapIndex]] = [
        this.values[swapIndex],
        this.values[parentIndex],
      ];
      parentIndex = swapIndex;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log("heap", heap); //  [41, 39, 33, 18, 27, 12]
//               41
//          39       33
//        18  27   12

heap.insert(55);
console.log("heap", heap); //  [55, 39, 41, 18, 27, 12, 33]
//               55
//          39       41
//        18  27   12  33

heap.extractMax(); // 55
console.log("heap", heap); // [41, 39, 33, 18, 27, 12]
