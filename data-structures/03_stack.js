/* Implementing stack with singly linked list */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Since stack is of constant time, we will be adding and deleting data from start */

  /* Define push - acts like unshift of linked list
    > The function should accept a value
    > Create a new node with that value
    > If there are no nodes in the stack, set the first and last property to be the
      newly created node 
    > If there is at least one node, create a variable that stores the current first
      property on the stack
    > Reset the first property to be the newly created node
    > Set the next property on the node to be the previously created variable
    > Increment the size of the stack by 1
    > Return the size
    */
  push(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  /* Define pop - acts like shift of linked list
    > If there are no nodes in the stack, return null
    > Create a temporary variable to store the first property on the stack
    > If there is only 1 node, set the first and last property to be null
    > If there is more than one node, set the first property to be the next
      property on the current first
    > Decrement the size by 1
    > Return the value of the node removed
    */
  pop() {
    if (!this.size) return;
    const poppedNode = this.first;
    this.first = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.value;
  }
}

const stack = new Stack();
stack.push("google");
stack.push("facebook");
stack.push("instagram");
