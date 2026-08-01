const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const extractVariables = (text = "") => {
  const variables = new Set();

  for (const match of text.matchAll(VARIABLE_REGEX)) {
    variables.add(match[1]);
  }

  return [...variables];
};