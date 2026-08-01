import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Globe } from "lucide-react";

export const ApiNode = ({ id }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const handles = [
    {
      key: "input",
      type: "target",
      position: Position.Left,
    },
    {
      key: "response",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode
      id={id}
      title="API Request"
      icon={<Globe size={16} />}
      variant="api"
      handles={handles}
    >
      <label>
        URL
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
        />
      </label>

      <label>
        Method
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
