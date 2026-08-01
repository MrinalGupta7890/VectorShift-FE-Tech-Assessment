import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Database } from "lucide-react";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("");

  const handles = [
    {
      key: "query",
      type: "target",
      position: Position.Left,
    },
    {
      key: "result",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode
      id={id}
      title="Database Query"
      icon={<Database size={16} />}
      variant="database"
      handles={handles}
    >
      <label>
        Table
        <input value={table} onChange={(e) => setTable(e.target.value)} />
      </label>
    </BaseNode>
  );
};
