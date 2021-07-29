/**
 * @class Queue
 * @link https://cs.slides.com/colt_steele/queues
 * Queue is FIFO data structure
 * To maintain constant time for insertion & deletion,
 * push (enque) & shift (deque) of singly linked list to be implemented 
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // https://cs.slides.com/colt_steele/queues#/7
  enque(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.size;
  }

  // https://cs.slides.com/colt_steele/queues#/10
  deque() {
    if (!this.first) return undefined;
    const removeNode = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removeNode.next;
    }
    this.size--;
    removeNode.next = null;
    return removeNode.value;
  }
}

const queue = new Queue();
[10, 20, 30, 40, 50].forEach(queue.enque.bind(queue));
console.log(queue);
