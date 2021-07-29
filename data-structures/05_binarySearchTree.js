/**
 * @class BinarySearchTree
 * @link https://cs.slides.com/colt_steele/trees
 */

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // https://cs.slides.com/colt_steele/trees#/29
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currNode = this.root;
      while (true) {
        if (val === currNode.value) return undefined;
        if (val < currNode.value) {
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        }
        if (val > currNode.value) {
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  // https://cs.slides.com/colt_steele/trees#/33
  contains(val) {
    if (!this.root) return false;
    let currNode = this.root;
    while (true) {
      if (val === currNode.value) return true;
      if (val < currNode.value) {
        if (currNode.left) currNode = currNode.left
        else return false;
      };
      if (val > currNode.value) {
        if (currNode.right) currNode = currNode.right;
        else return false;
      };
    }
  }

  // Breadth First Search - https://cs.slides.com/colt_steele/trees#/43
  bfs() {
    const queue = [];
    const visited = []
    queue.push(this.root);
    while (queue.length) {
      const currNode = queue.shift();
      visited.push(currNode.value);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    return visited;
  }

  // Depth First Search (Pre Order) - https://cs.slides.com/colt_steele/trees#/51
  // generates glone of a tree - used for exporting the tree
  dfs_pre_order() {
    const visited = [];
    const helper = (node) => {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

  // Depth First Search (Post Order) - https://cs.slides.com/colt_steele/trees#/53
  dfs_post_order() {
    const visited = [];
    const helper = (node) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }
    helper(this.root);
    return visited;
  }

  // Depth First Search (In Order) - https://cs.slides.com/colt_steele/trees#/49
  // generates sorted order
  dfs_in_order() {
    const visited = [];
    const helper = (node) => {
      if (node.left) helper(node.left);
      visited.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

}

const bst = new BinarySearchTree();

[10, 6, 15, 3, 8, 20].forEach(x => bst.insert(x));

console.log(bst);
console.log('bfs:', bst.bfs()); // [10, 6, 15, 3, 8, 20]
console.log('dfs_pre-order:', bst.dfs_pre_order()); // [10, 6, 3, 8, 15, 20]
console.log('dfs_post-order:', bst.dfs_post_order()); // [3, 8, 6, 20, 15, 10]
console.log('dfs_in-order:', bst.dfs_in_order()); // [3, 6, 8, 10, 15, 20]
