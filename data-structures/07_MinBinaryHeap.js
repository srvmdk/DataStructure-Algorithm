/**
 * @class MinBinaryHeap
 */

class MinBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    this.value.push(val);
    const bubbleUp = () => {
      let childIdx = this.value.length - 1;
      while(childIdx > 0) {
        const parentIdx = Math.floor((childIdx - 1) / 2);
        if (this.value[parentIdx] < this.value[childIdx] ) break;
        [this.value[childIdx], this.value[parentIdx]] = [
          this.value[parentIdx],
          this.value[childIdx],
        ];
        childIdx = parentIdx;
      }
    };
    bubbleUp();
    return this.value;
  }

  extractMin() {
    [this.value[0], this.value[this.value.length - 1]] = [
      this.value[this.value.length - 1],
      this.value[0],
    ];
    const removeVal = this.value.pop();
    const bubbleDown = () => {
      let idx = 0,
        leftChild,
        rightChild;
      const el = this.value[idx];
      const length = this.value.length;
      while (true) {
        const leftChildIdx = 2 * idx + 1,
          rightChildIdx = 2 * idx + 2;
        let swap;
        if (leftChildIdx < length) {
          leftChild = this.value[leftChildIdx];
          if (leftChild < el) swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.value[rightChildIdx];
          if ((!swap && rightChild < el) || (swap && rightChild < leftChild))
            swap = rightChildIdx;
        }
        if (!swap) break;
        [this.value[swap], this.value[idx]] = [
          this.value[idx],
          this.value[swap],
        ];
        idx = swap;
      }
    };
    if (this.value.length) bubbleDown();
    return removeVal;
  }
}

const minBinaryHeap = new MinBinaryHeap();

[41, 39, 33, 18, 27, 12].forEach(minBinaryHeap.insert.bind(minBinaryHeap));
console.log('Min binary heap:', minBinaryHeap.value);
