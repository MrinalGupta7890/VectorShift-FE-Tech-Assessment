import { Handle } from "reactflow";
import "./BaseNode.css";

export const BaseNode = ({
  id,
  title,
  icon,
  variant = "default",
  handles = [],
  width,
  height,
  children,
}) => {
  return (
    <div
      className={`base-node ${variant}`}
      style={{
        width,
        height,
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.key}
          id={`${id}-${handle.key}`}
          type={handle.type}
          position={handle.position}
          style={handle.style}
        />
      ))}

      <div className="base-node-header">
        {icon && <span className="node-icon">{icon}</span>}
        <span className="node-title">{title}</span>
      </div>

      <div className="base-node-content">{children}</div>
    </div>
  );
};
