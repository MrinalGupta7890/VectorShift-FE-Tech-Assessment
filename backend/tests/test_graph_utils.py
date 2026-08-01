import pytest
from graph_utils import is_dag
from schemas import Node, Edge


def test_is_dag_with_acyclic_graph():
    nodes = [Node(id="A"), Node(id="B"), Node(id="C")]
    edges = [
        Edge(source="A", target="B"),
        Edge(source="B", target="C")
    ]
    assert is_dag(nodes, edges) == True


def test_is_dag_with_cyclic_graph():
    nodes = [Node(id="A"), Node(id="B"), Node(id="C")]
    edges = [
        Edge(source="A", target="B"),
        Edge(source="B", target="C"),
        Edge(source="C", target="A")
    ]
    assert is_dag(nodes, edges) == False


def test_is_dag_with_disconnected_graph():
    nodes = [
        Node(id="A"), Node(id="B"), 
        Node(id="X"), Node(id="Y")
    ]
    edges = [
        Edge(source="A", target="B"),
        Edge(source="X", target="Y")
    ]
    assert is_dag(nodes, edges) == True


def test_is_dag_with_self_loop():
    nodes = [Node(id="A")]
    edges = [Edge(source="A", target="A")]
    assert is_dag(nodes, edges) == False
