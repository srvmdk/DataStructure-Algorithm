/**
 * @class SinglyLinkedList
 * @link https://cs.slides.com/colt_steele/singly-linked-lists
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/5
  push(val) {
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/8
  pop() {
    if (!this.head) return undefined;
    const removeNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head,
        prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/11
  shift() {
    if (!this.head) return undefined;
    const removeNode = this.head;
    this.head = this.head.next;
    this.length--;
    removeNode.next = null;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/14
  unshift(val) {
    const newNode = new Node(val);
    const nextNode = this.head;
    this.head = newNode;
    this.head.next = nextNode;
    if (!nextNode) {
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/17
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/21
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.value = val;
    return true;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/23
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prev = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/26
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const removeNode = prev.next;
    prev.next = prev.next.next;
    removeNode.next = null;
    this.length--;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/singly-linked-lists#/29
  /* original: 13 -> 27 -> 32 -> 71
     reversed: 13 <- 27 <- 32 <- 71 */
  reverse() {
    let node = this.head,
      prev = null;
    [this.head, this.tail] = [this.tail, this.head];
    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node; // prev captures last traversed node in the process
      node = next;
    }
    return this;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push('Good morning!!');
singlyLinkedList.push('Hi,');
singlyLinkedList.push('this is');
singlyLinkedList.push('Sourav');
singlyLinkedList.push('Modak');

console.log(singlyLinkedList);
