import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Filter } from "lucide-react";

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState("");

  const handles = [
    {
      key: "input",
      type: "target",
      position: Position.Left,
    },
    {
      key: "true",
      type: "source",
      position: Position.Right,
      style: { top: "35%" },
    },
    {
      key: "false",
      type: "source",
      position: Position.Right,
      style: { top: "70%" },
    },
  ];

  return (
    <BaseNode
      id={id}
      title="Filter"
      icon={<Filter size={16} />}
      variant="filter"
      handles={handles}
    >
      <label>
        Condition
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
