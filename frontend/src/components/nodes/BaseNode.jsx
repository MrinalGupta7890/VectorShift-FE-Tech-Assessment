// frontend/src/components/nodes/BaseNode.jsx

import { Handle } from "reactflow";
import "./BaseNode.css";

export const BaseNode = ({ title, handles = [], children }) => {
  return (
    <div className="base-node">
      <div className="base-node__header">
        <span>{title}</span>
      </div>

      <div className="base-node__content">
        {children}
      </div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};