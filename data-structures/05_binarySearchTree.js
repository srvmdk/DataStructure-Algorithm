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

  /* Define BFS - breadth first search
    > Create a queue (this can be an array) and a variable to store the values of
      nodes visited
    > Place the root node in the queue
    > Loop as long as there is anything in the queue
    > Dequeue a node from the queue and push the value of the node into the variable
      that stores the nodes
    > If there is a left property on the node dequeued - add it to the queue
    > If there is a right property on the node dequeued - add it to the queue
    > Return the variable that stores the values
    */

  bfs() {
    let node = this.root,
      queue = [],
      visited = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("%cOUTPUT", "color: green; font-weight: bold", tree);
