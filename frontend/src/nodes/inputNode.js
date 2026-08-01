import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Inbox } from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  const handles = [
    {
      key: "value",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode id={id} title="Input" icon={<Inbox size={16} />} variant="input" handles={handles}>
      <label>
        Name
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label>
        Type
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
