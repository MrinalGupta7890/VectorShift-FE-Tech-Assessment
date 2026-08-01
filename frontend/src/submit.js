import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to parse pipeline");
      }

      const result = await response.json();

      alert(
        `Pipeline Analysis

Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (error) {
      console.error(error);

      alert("Unable to analyze pipeline.");
    }
  };

  return (
    <div className="submit-container">
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        🚀 Submit
      </button>
    </div>
  );
};