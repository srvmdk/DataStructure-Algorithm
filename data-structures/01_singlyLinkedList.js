/* Creating a singly linked list*/

// Define Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Define singly linked list class
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  resetHeadTail() {
    this.head = null;
    this.tail = null;
  }

  /* Define push property - adds new node to end
    > accepts a value 
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

  /* Define pop property - removes one node from end
    > if there's no nodes in list, return undefined
    > loop through the list until we reach the 'tail'
    > set 'next' property of the 2nd to last node to be null
    > set 'tail' to be the 2nd to last node
    > decrement the length by 1
    > return the value of node removed
    */
  pop() {
    if (!this.head) return;

    let curr = this.head,
      prev = curr;

    while (curr.next) {
      prev = curr;
      curr = prev.next;
    }

    prev.next = null;
    this.tail = prev;

    this.length--;
    if (this.length === 0) this.resetHeadTail();

    return curr.val;
  }

  /* Define shift property - removes one node from start
    > if there's no nodes in list, return undefined
    > store current 'head' property in a variable
    > set 'head' property to current head's next property
    > decrement the length by 1
    > return the value of node removed
    */
  shift() {
    if (!this.head) return;

    let removeNode = this.head;
    this.head = removeNode.next;

    this.length--;
    if (this.length === 0) this.resetHeadTail();

    return removeNode.val;
  }

  /* Define unshift property - adds new node to start
    > accepts a value 
    > create 'new node' using value passed
    > if there is no 'head' on the list, set 'head' & 'tail' to be the newly created node
    > else, set newly created node's 'next' property to be the current head property on
        the list
    > set 'head' property on the list to be that newly created node
    > increament length of the list by 1
    > return the list
   */
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /* Define get property - fetch value for specific index
    > accepts an index
    > if 'index' < 0 or >= length of list, return null
    > loop through the list until the index is reached and return the node at
        specific index
  */
  get(index) {
    if (typeof index !== "number" || index < 0 || index >= this.length)
      return null;

    let currNode = this.head;
    for (let i = 1; i <= index; i++) {
      currNode = currNode.next;
    }

    return currNode;
  }
}

// create a singly linked list
let list = new singlyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
