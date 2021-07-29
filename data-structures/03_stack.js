/**
 * @class Stack
 * @link https://cs.slides.com/colt_steele/stacks
 * Stack is a data LIFO structure
 * To maintain constant time for insertion & deletion,
 * shift & unshift of singly linked list to be implemented
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // https://cs.slides.com/colt_steele/stacks#/11
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    return ++this.size;
  }

  // https://cs.slides.com/colt_steele/stacks#/14
  pop() {
    if (!this.first) return undefined;
    const removeNode = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removeNode.next;
    }
    removeNode.next = null;
    this.size--;
    return removeNode.value;
  }
}

const stack = new Stack();
[10, 20, 30, 40, 50].forEach(stack.push.bind(stack));
console.log(stack);
