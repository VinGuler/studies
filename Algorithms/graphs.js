/**
 * The graph looks like this:
 * A - B - D
 * \   \
 *  C   E
 *   \ /
 *    F
 * 6 Vertices
 * 6 Edges
 */
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
}

// breadth-first-search
function bfs(node_name) {
  const result = []
  const queue = [node_name]
  const visited = {}
  while (queue.length) {
    const current = queue.shift()
    if (!visited[current]) {
      result.push(current)
    }
    visited[current] = true
    if (graph[current] && graph[current].length) {
      for (const node of graph[current]) {
        if (!visited[node]) {
          queue.push(node)
          visited[node] = true
          result.push(node)
        }
      }
    }
  }
  return result
}

// depth-first-search
function dfs(node_name, visited = {}) {
  const result = []
  if (!visited[node_name]) {
    result.push(node_name)
    visited[node_name] = true
    for (const node of graph[node_name]) {
      result.push(...dfs(node, visited))
    }
  }
  return result
}

const res = dfs('A')
console.log('res', res)
