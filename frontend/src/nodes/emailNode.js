import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/nodes/BaseNode";
import { Mail } from "lucide-react";

export const EmailNode = ({ id }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");

  const handles = [
    {
      key: "input",
      type: "target",
      position: Position.Left,
    },
  ];

  return (
    <BaseNode id={id} title="Send Email" icon={<Mail size={16} />} variant="email" handles={handles}>
      <label>
        To
        <input value={to} onChange={(e) => setTo(e.target.value)} />
      </label>

      <label>
        Subject
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
    </BaseNode>
  );
};
