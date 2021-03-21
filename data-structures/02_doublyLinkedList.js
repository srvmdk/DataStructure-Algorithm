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

    let removeNode = this.tail;
    if (this.length === 1) this.resetHeadTail();
    else {
      this.tail = removeNode.prev;
      this.tail.next = null;
    }
    this.length--;

    return removeNode.val;
    list;
  }
}

// create a doubly linked list
let list = new doublyLinkedList();
list.push("Hi!!");
list.push("this is");
list.push("Sourav");
list.push(":)");
