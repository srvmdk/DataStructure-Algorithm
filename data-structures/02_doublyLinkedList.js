/**
 * @class DoublyLinkedList
 * @link https://cs.slides.com/colt_steele/doubly-linked-lists
 */

class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/5
  push(val) {
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/8
  pop() {
    if (!this.head) return undefined;
    const removeNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removeNode.prev;
      this.tail.next = null;
    }
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/11
  shift() {
    if (!this.head) return undefined;
    const removeNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeNode.next;
      this.head.prev = null;
    }
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/14
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/17
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let foundNode;
    if (index <= this.length / 2) {
      let counter = 0;
      foundNode = this.head;
      while (counter !== index) {
        foundNode = foundNode.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      foundNode = this.tail;
      while (counter !== index) {
        foundNode = foundNode.prev;
        counter--;
      }
    }
    return foundNode;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/20
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.value = val;
    return true;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/23
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.next.prev = newNode
    this.length++;
    return true;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/26
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const removeNode = this.get(index);
    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode.value;
  }

  // https://cs.slides.com/colt_steele/doubly-linked-lists#/29
  reverse() {
    let curr = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let counter = 0;
    while (counter < this.length) {
      const next = curr.next;
      curr.next = curr.prev;
      curr.prev = next;
      curr = next;
      counter++;
    }
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push('Good morning!!');
doublyLinkedList.push('Hi,');
doublyLinkedList.push('this is');
doublyLinkedList.push('Sourav');
doublyLinkedList.push('Modak');

console.log(doublyLinkedList);
