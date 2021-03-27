/* Implementing queue with singly linked list - FIFO data structure */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Define enqueue - adding to end of the queue
        acts like push in linked list */
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  /* Define deque - remove from the beginning of the queue 
        acts like shift in linked list */
  dequeue() {
    if (!this.size) return;
    const removeNode = this.first;
    if (this.size === 1) this.last = null;
    this.first = removeNode.next;
    removeNode.next = null;
    this.size--;
    return removeNode.value;
  }
}

const queue = new Queue();
queue.enqueue("print-1");
queue.enqueue("print-2");
queue.enqueue("print-3");