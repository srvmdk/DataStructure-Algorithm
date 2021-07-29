/**
 * Dijkstra's Algorithm
 * @link https://cs.slides.com/colt_steele/graphs#/70
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }

  // visual approach - https://cs.slides.com/colt_steele/graphs#/82
  // pseudocode - https://cs.slides.com/colt_steele/graphs#/120
  shortestPath(start, end) {
    const priorityQueue = new PriorityQueue();
    const distances = {}; // distance of each node from start
    const previous = {}; // contains previous node of each node during traversal
    const path = [];
    Object.keys(this.adjacencyList).forEach((vertex) => {
      distances[vertex] = vertex === start ? 0 : Infinity;
      // priorityQueue.enque(vertex, vertex === start ? 0 : Infinity);
      previous[vertex] = null;
    });
    priorityQueue.enque(start, 0);
    while (priorityQueue.values.length) {
      const { vertex: currentNode } = priorityQueue.dequeue(); // provides smallest node
      if (currentNode === end) {
        path.push(end);
        while (previous[path[0]]) path.unshift(previous[path[0]]);
        break;
      }
      if (currentNode || distances[currentNode] !== Infinity) {
        this.adjacencyList[currentNode].forEach((neighbour) => {
          const neighbourNodeDistanceFromStart =
            distances[currentNode] + neighbour.weight;
          if (distances[neighbour.node] > neighbourNodeDistanceFromStart) {
            distances[neighbour.node] = neighbourNodeDistanceFromStart;
            previous[neighbour.node] = currentNode;
            priorityQueue.enque(neighbour.node, neighbourNodeDistanceFromStart);
          }
        });
      }
    }

    // console.log({ priorityQueue, distances, previous });
    // priorityQueue: {
    //   values: [
    //     { vertex: 'E', priority: 7 },
    //     { vertex: 'B', priority: null },
    //     { vertex: 'C', priority: null },
    //     { vertex: 'D', priority: null },
    //     { vertex: 'E', priority: null },
    //     { vertex: 'F', priority: null },
    //   ],
    // }
    // distances: { A: 0, B: 4, C: 2, D: 4, E: 6, F: 5 }
    // previous: { A: null, B: 'A', C: 'A', D: 'C', E: 'F', F: 'D' }

    return path;
  }
}

// https://cs.slides.com/colt_steele/graphs#/118
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enque(vertex, priority) {
    this.values.push({ vertex, priority });
    this.values.sort((a, b) => a.priority - b.priority); // sorts in ascending order
  }
  dequeue() {
    return this.values.shift();
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.adjacencyList);

console.log(graph.shortestPath('A', 'E')); // ["A", "C", "D", "F", "E"]
