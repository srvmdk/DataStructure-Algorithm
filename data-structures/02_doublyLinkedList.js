/* Creating a doubly linked list*/

// Define Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Define doubly linked list
class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  resetHeadTail() {
    this.head = null;
    this.tail = null;
  }

  /* Define push property
    > Create a new node with the value passed to the function
    > If the head property is null set the head and tail to be the newly created node 
    > If not, set the next property on the tail to be that node
    > Set the previous property on the newly created node to be the tail
    > Set the tail to be the newly created node
    > Increment the length
    > Return the Doubly Linked List
    */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  /* Define pop property
    > If there is no head, return undefined
    > Store the current tail in a variable to return later
    > If the length is 1, set the head and tail to be null
    > Update the tail to be the previous Node.
    > Set the newTail's next to null
    > Decrement the length
    > Return the value removed
    */
  pop() {
    if (!this.head) return;

    let poppedNode = this.tail;
    if (this.length === 1) this.resetHeadTail();
    else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode.val;
  }

  /* Define shift property
    > If length is 0, return undefined
    > Store the current head property in a variable (we'll call it old head)
    > If the length is one,
        > Set the head to be null
        > Set the tail to be null
    > Update the head to be the next of the old head
    > Set the head's prev property to null
    > Set the old head's next to null
    > Decrement the length
    */
  shift() {
    if (!this.head) return;

    if (this.length === 1) this.resetHeadTail();
    else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  /* Define unshift property
    > Create a new node with the value passed to the function
    > If the length is 0
        > Set the head to be the new node
        > Set the tail to be the new node
    > Otherwise,
        > Set the prev property on the head of the list to be the new node
        > Set the next property on the new node to be the head property 
        > Update the head to be the new node
    > Increment the length
    > Return the list
    */
  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
}

// create a doubly linked list
let list = new doublyLinkedList();
list.push("Hi!!");
list.push("this is");
list.push("Sourav");
list.push(":)");
