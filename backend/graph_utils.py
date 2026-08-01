from collections import defaultdict


def build_graph(edges):
    graph = defaultdict(list)

    for edge in edges:
        graph[edge.source].append(edge.target)

    return graph


def is_dag(nodes, edges):
    graph = build_graph(edges)

    visited = set()
    visiting = set()

    def dfs(node):
        if node in visiting:
            return False

        if node in visited:
            return True

        visiting.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        visiting.remove(node)
        visited.add(node)

        return True

    for node in nodes:
        if node.id not in visited:
            if not dfs(node.id):
                return False

    return True