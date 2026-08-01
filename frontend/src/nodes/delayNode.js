import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Timer } from "lucide-react";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);

  const handles = [
    {
      key: "input",
      type: "target",
      position: Position.Left,
    },
    {
      key: "output",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode id={id} title="Delay" icon={<Timer size={16} />} variant="delay" handles={handles}>
      <label>
        Seconds
        <input
          type="number"
          min="0"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
