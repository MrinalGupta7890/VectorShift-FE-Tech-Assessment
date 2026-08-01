import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Bot } from "lucide-react";

export const LLMNode = ({ id }) => {
  const handles = [
    {
      key: "system",
      type: "target",
      position: Position.Left,
      style: {
        top: "33%",
      },
    },
    {
      key: "prompt",
      type: "target",
      position: Position.Left,
      style: {
        top: "66%",
      },
    },
    {
      key: "response",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode id={id} title="LLM" icon={<Bot size={16} />} variant="llm" handles={handles}>
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
