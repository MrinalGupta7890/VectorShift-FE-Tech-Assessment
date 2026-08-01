import { DraggableNode } from "./draggableNode";
import { nodeRegistry } from "./config/nodeRegistry";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <h2 className="toolbar-title">🧩 Pipeline Nodes</h2>
        <p className="toolbar-subtitle">Drag & drop nodes onto the canvas</p>
      </div>

      <div className="toolbar-grid">
        {nodeRegistry.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} icon={node.icon} />
        ))}
      </div>
    </div>
  );
};
