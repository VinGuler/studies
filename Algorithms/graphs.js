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
  B: ['A', 'E'],
  C: ['A'],
  D: ['E'],
  E: ['B', 'D'],
  F: []
}

// Counts all the relation groups in the graph
function count_relations(graph) {
  let group_count = 0
  const groups = {}

  const is_node_in_existing_group = (graph, node) => {
    const related_nodes = dfs(graph, node)
    // If any of the related nodes is a group key -> this node is included there
    for (const related_node of related_nodes) {
      if (groups[related_node]) {
        return true
      }
    }
    return false
  }

  for (const node in graph) {
    if (graph[node].length === 0) {
      group_count++
      continue
    }
    if (!is_node_in_existing_group(graph, node)) {
      group_count++
      groups[node] = graph[node]
    }
  }

  return group_count
}

// Returns all the nodes related to the node_name
// breadth-first-search
function bfs(graph, node_name) {
  const all_related_nodes = []
  const queue = [node_name]
  const visited = {}
  while (queue.length) {
    const current = queue.shift()
    if (!visited[current]) {
      all_related_nodes.push(current)
    }
    visited[current] = true
    if (graph[current] && graph[current].length) {
      for (const node of graph[current]) {
        if (!visited[node]) {
          queue.push(node)
          visited[node] = true
          all_related_nodes.push(node)
        }
      }
    }
  }
  return all_related_nodes
}

// Returns all the nodes related to the node_name
// depth-first-search
function dfs(graph, node_name, visited = {}) {
  const all_related_nodes = []
  if (!visited[node_name]) {
    all_related_nodes.push(node_name)
    visited[node_name] = true
    for (const node of graph[node_name]) {
      all_related_nodes.push(...dfs(graph, node, visited))
    }
  }
  return all_related_nodes
}

const path = []
const maze = [[0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0]]

const res = count_relations(graph)
console.log('res', res)
