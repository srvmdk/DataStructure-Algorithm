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
class DoublyLinkedList {
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

    let oldHead = this.head;
    if (this.length === 1) this.resetHeadTail();
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead.val;
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

  /* Define get property
    > If the index is less than 0 or greater or equal to the length, return null
    > If the index is less than or equal to half the length of the list
        > Loop through the list starting from the head and loop towards the middle
        > Return the node once it is found
    > If the index is greater than half the length of the list
    ​    > Loop through the list starting from the tail and loop towards the middle
        > Return the node once it is found
    */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let travelFromHead = index <= this.length / 2 ? true : false;

    let currentNode = travelFromHead ? this.head : this.tail;
    let counter = travelFromHead ? 0 : this.length - 1;

    while (counter !== index) {
      currentNode = travelFromHead ? currentNode.next : currentNode.prev;
      travelFromHead ? counter++ : counter--;
    }

    return currentNode;
  }

  /* Define set property
    > Create a variable which is the result of the get method at the index passed
      to the function
        > If the get method returns a valid node, 
          set the value of that node to be the value passed to the function
        > Return true
    > Otherwise, return false
    */
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  /* Define insert property
    > If the index is less than zero or greater than or equal to the length return false
    > If the index is 0, unshift
    > If the index is the same as the length, push
    > Use the get method to access the index -1
    > Set the next and prev properties on the correct nodes to link everything together
    > Increment the length 
    > Return true
    */
  insert(index, val) {
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(index - 1);
    if (foundNode !== null) {
      let nextNode = foundNode.next;
      foundNode.next = newNode;
      newNode.prev = foundNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  /* Define remove property
    > If the index is less than zero or greater than or equal to the length return 
      undefined
    > If the index is 0, shift
    > If the index is the same as the length-1, pop
    > Use the get method to retrieve the item to be removed
    > Update the next and prev properties to remove the found node from the list
    > Set next and prev to null on the found node
    > Decrement the length
    > Return the removed node
    */
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index);
    if (removeNode !== null) {
      removeNode.prev.next = removeNode.next;
      removeNode.next.prev = removeNode.prev;
      this.length--;

      removeNode.prev = null;
      removeNode.next = null;
      return removeNode.val;
    } else return;
  }

  /* Define reverse property
    > Create a variable called currentNode and set it to be the head of the list
    > Swap head & tail property of the list
    > Loop through the list
        > create a variable nextNode and set it to be next property of currentNode
        > swap next & prev property of the currentNode
        > currentNode will be set to be same as stored in nextNode
    > Return the list
    */
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    for (let i = 0; i < this.length; i++) {
      let nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }

    return this;
  }
}

// create a doubly linked list
let list = new DoublyLinkedList();
list.push("Hi!!");
list.push("this");
list.push("is");
list.push("Sourav");
list.push(":)");
