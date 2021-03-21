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
}

// create a doubly linked list
let list = new doublyLinkedList();
list.push("Hi!!");
list.push("this is");
list.push("Sourav");
list.push(":)");
