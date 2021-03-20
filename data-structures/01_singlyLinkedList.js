/* Creating a singly linked list*/

// create Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create singly linked list class
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Create push property
    > accept a value 
    > create 'new node' using value passed
    > if there is no 'head' on the list, set 'head' & 'tail' to be the newly created node
    > else, set 'next' property on the 'tail' to be new node and set 'tail' property on
        the list to be newly created node
    > increament length of the list by 1
    > return the list
    */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
}

// checking ...
let list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);

console.log(list);
