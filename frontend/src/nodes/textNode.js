import { useMemo, useState } from "react";
import { Position } from "reactflow";

import { Type } from "lucide-react";

import { BaseNode } from "../components/nodes/BaseNode";
import { extractVariables } from "../utils/textNodeUtils";
import { useAutoResize } from "../hooks/useAutoResize";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  const size = useAutoResize(text);

  const variables = useMemo(() => extractVariables(text), [text]);

  const handles = [
    ...variables.map((variable, index) => ({
      key: variable,
      type: "target",
      position: Position.Left,
      style: {
        top: 60 + index * 24,
      },
    })),
    {
      key: "output",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      icon={<Type size={14} />}
      variant="text"
      handles={handles}
      width={size.width}
    >
      <label>
        Text
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text or use {{variables}}..."
          style={{
            height: `${size.height}px`,
            minHeight: "44px",
            maxHeight: "320px",
            overflow: "hidden",
            resize: "none",
          }}
        />
      </label>
    </BaseNode>
  );
};
