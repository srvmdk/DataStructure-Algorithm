/**
 * @class Graph
 * @link https://cs.slides.com/colt_steele/graphs
 */

class Graph {
  // https://cs.slides.com/colt_steele/graphs#/32
  constructor() {
    this.adjacencyList = {};
  }

  // https://cs.slides.com/colt_steele/graphs#/33
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  // https://cs.slides.com/colt_steele/graphs#/35
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  // https://cs.slides.com/colt_steele/graphs#/38
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
    }
  }

  //https://cs.slides.com/colt_steele/graphs#/41
  removeVertex(v) {
    if (this.adjacencyList[v]) {
      this.adjacencyList[v].forEach((el) => this.removeEdge(v, el));
      delete this.adjacencyList[v];
    }
  }

  // Depth First Traversal - https://cs.slides.com/colt_steele/graphs#/50
  // Depth First Traversal (recursive) - https://cs.slides.com/colt_steele/graphs#/57
  dfs_recursive(start) {
    if (!this.adjacencyList[start]) return;
    const result = [];
    const visited = {};
    function helper(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(
        (neighbour) => !visited[neighbour] && helper.call(this, neighbour)
      );
    }
    helper.call(this, start);
    return result;
  }

  // Depth First Traversal (iterative) - https://cs.slides.com/colt_steele/graphs#/60
  dfs_iterative(start) {
    if (!this.adjacencyList[start]) return;
    const result = [];
    const visited = {};
    const stack = [start];
    let vertex;
    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbour) =>
          stack.push(neighbour)
        );
      }
    }
    return result;
  }

  // Breadth First Traversal - https://cs.slides.com/colt_steele/graphs#/63
  bfs(start) {
    if (!this.adjacencyList[start]) return;
    const result = [];
    const visited = {};
    const queue = [start];
    let vertex;
    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbour) =>
          queue.push(neighbour)
        );
      }
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

/* visual representation
        A
      /   \
    B       C
    |       |
    D ----- E
     \     /
        F 
*/

console.log(graph.adjacencyList);

console.log(graph.dfs_recursive('A')); // ["A", "B", "D", "E", "C", "F"]
console.log(graph.dfs_iterative('A')); //  ["A", "C", "E", "F", "D", "B"]
console.log(graph.bfs('A')); // ["A", "B", "C", "D", "E", "F"]
