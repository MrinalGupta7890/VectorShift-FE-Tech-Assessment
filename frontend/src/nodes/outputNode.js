import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Send } from "lucide-react";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );

  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  const handles = [
    {
      key: "value",
      type: "target",
      position: Position.Left,
    },
  ];

  return (
    <BaseNode id={id} title="Output" icon={<Send size={16} />} handles={handles}>
      <label>
        Name
        <input
          type="text"
          variant="output"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label>
        Type
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
