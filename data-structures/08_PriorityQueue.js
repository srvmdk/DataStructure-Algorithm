/**
 * @class PriorityQueue - works based on MinBinaryHeap
 * @link https://cs.slides.com/colt_steele/heaps#/40
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.value.push(newNode);
    const bubbleUp = () => {
      let childIdx = this.value.length - 1;
      while (childIdx > 0) {
        let parentIdx = Math.floor((childIdx - 1) / 2);
        let childPriority = this.value[childIdx].priority,
          parentPriority = this.value[parentIdx]?.priority;
        if (parentPriority < childPriority) break;
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

  dequeue() {
    [this.value[0], this.value[this.value.length - 1]] = [
      this.value[this.value.length - 1],
      this.value[0],
    ];
    const removeNode = this.value.pop();
    const bubbleDown = () => {
      let idx = 0,
        leftChildPriority,
        rightChildPriority;
      const elPriority = this.value[idx].priority;
      const length = this.value.length;
      while (true) {
        const leftChildIdx = 2 * idx + 1,
          rightChildIdx = 2 * idx + 2;
        let swap;
        if (leftChildIdx < length) {
          leftChildPriority = this.value[leftChildIdx].priority;
          if (elPriority > leftChildPriority) swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChildPriority = this.value[rightChildIdx].priority;
          if (
            (!swap && rightChildPriority < elPriority) ||
            (swap && rightChildPriority < leftChildPriority)
          )
            swap = rightChildIdx;
        }
        if (!swap) break;
        [this.value[idx], this.value[swap]] = [
          this.value[swap],
          this.value[idx],
        ];
        idx = swap;
      }
    };
    if (this.value.length) bubbleDown();
    return removeNode;

  }
}

const priorityQueue = new PriorityQueue();

[
  { value: 'toothache', priority: 8 },
  { value: 'haemorrage', priority: 1 },
  { value: 'stroke', priority: 2 },
  { value: 'broken leg', priority: 10 },
  { value: 'high fever', priority: 5 },
  { value: 'flu', priority: 6 },
  { value: 'covid', priority: 0 },
  { value: 'malaria', priority: 3 },
].forEach(({value, priority}) => priorityQueue.enqueue(value, priority));

console.log(priorityQueue.value);
