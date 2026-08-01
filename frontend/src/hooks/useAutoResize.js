import { useMemo } from "react";

export const useAutoResize = (text) => {
  return useMemo(() => {
    const lines = text.split("\n");

    const longest = Math.max(...lines.map((l) => l.length), 18);

    return {
      width: Math.min(Math.max(longest * 7.5 + 70, 260), 520),
      height: Math.max(lines.length * 22 + 22, 44),
    };
  }, [text]);
};