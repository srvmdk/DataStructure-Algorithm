class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* Define insert property
    > Create a new node
    > Starting at the root
        > Check if there is a root, if not - the root now becomes that new node!
        > If there is a root, check if the value of the new node is greater than or
          less than the value of the root
        > If it is greater 
            > Check to see if there is a node to the right
            > If there is, move to that node and repeat these steps
            > If there is not, add that node as the right property
    > If it is less
        > Check to see if there is a node to the left
            > If there is, move to that node and repeat these steps
            > If there is not, add that node as the left property
    */
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }

  /* Define find property
    > Starting at the root
        > Check if there is a root, if not - we're done searching!
        > If there is a root, check if the value of the new node is the value 
          we are looking for. If we found it, we're done!
        > If not, check to see if the value is greater than or less than the value
          of the root
        > If it is greater 
            > Check to see if there is a node to the right
                > If there is, move to that node and repeat these steps
                > If there is not, we're done searching!
        > If it is lesser
            > Check to see if there is a node to the left
                > If there is, move to that node and repeat these steps
                > If there is not, we're done searching!
   */
  find(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(15);
tree.insert(7);
tree.insert(2);
tree.insert(5);
tree.insert(21);
tree.insert(11);
tree.insert(17);
tree.insert(13);

console.log("%cOUTPUT", "color: green; font-weight: bold", tree);
