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

    let currNode = this.head,
      counter = 0;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  /* Define set property - set value for a specific index
    > accepts a value and an index
    > use 'get' function to find specific node
    > if node not found, retun false
    > if found, update its value with that passed in the function and return true
    */
  set(index, val) {
    if (val === "undefined" || index === "undefined") return false;

    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  /* Define insert property - insert value at a specific index
    > accepts a value and an index
    > create 'new node' using value passed
    > if index is same as length, 'push' new node to the end of the list
    > if index is 0, 'unshift' new node to the start of the list
    > otherwise, 'get' the node at index - 1 position, let previous node
    > set 'next' property on that 'previous node' to be new node
    > set 'next' property on 'new node' to be previous's next
    > increment the length
    > return true
    */
  insert(index, val) {
    if (
      val === "undefined" ||
      index === "undefined" ||
      index < 0 ||
      index > this.length
    )
      return false;

    let newNode = new Node(val);

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  /* Define remove property - remove value from a specific index
    > accepts an index  
    > if index < 0 or >= the length of the list, return undefined
    > if index is same aslength-1, use 'pop'
    > if index = 0, use 'shift'
    > otherwise, using 'get' method, access the node at index - 1  
    > set 'next' property on that node to be the next of the next node
    > decrement the length
    > return the value of the node removed
  */
  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;

    return removeNode.val;
  }
}

// create a singly linked list
let list = new singlyLinkedList();
list.push("Hi!!");
list.push("this is");
list.push("Sourav");
list.push(":)");
