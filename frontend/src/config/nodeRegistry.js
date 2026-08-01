// frontend/src/config/nodeRegistry.js

import { InputNode } from "../nodes/inputNode";
import { OutputNode } from "../nodes/outputNode";
import { LLMNode } from "../nodes/llmNode";
import { TextNode } from "../nodes/textNode";
import { ApiNode } from "../nodes/apiNode";
import { DatabaseNode } from "../nodes/databaseNode";
import { FilterNode } from "../nodes/filterNode";
import { EmailNode } from "../nodes/emailNode";
import { DelayNode } from "../nodes/delayNode";
import { Bot, Database, FileText, Filter, Globe, Inbox, Mail, Send, Timer } from "lucide-react";

export const nodeRegistry = [
  {
    type: "customInput",
    label: "Input",
    icon:<Inbox size={20}/>,
    component: InputNode,
  },
  {
    type: "llm",
    label: "LLM",
    icon:<Bot size={20}/>,
    component: LLMNode,
  },
  {
    type: "customOutput",
    label: "Output",
    icon:<Send size={20}/>,
    component: OutputNode,
  },
  {
    type: "text",
    label: "Text",
    icon:<FileText size={20}/>,
    component: TextNode,
  },
  {
    type: "api",
    label: "API",
    icon:<Globe size={20}/>,
    component: ApiNode,
  },
  {
    type: "database",
    label: "Database",
    icon:<Database size={20}/>,
    component: DatabaseNode,
  },
  {
    type: "filter",
    label: "Filter",
    icon:<Filter size={20}/>,
    component: FilterNode,
  },
  {
    type: "email",
    label: "Email",
    icon:<Mail size={20}/>,
    component: EmailNode,
  },
  {
    type: "delay",
    label: "Delay",
    icon:<Timer size={20}/>,
    component: DelayNode,
  },
];
