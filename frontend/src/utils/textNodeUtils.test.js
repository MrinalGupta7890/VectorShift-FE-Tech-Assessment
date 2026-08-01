import { extractVariables } from "./textNodeUtils";

describe("extractVariables", () => {
  it("should extract a single valid variable", () => {
    const result = extractVariables("Hello {{name}}!");
    expect(result).toEqual(["name"]);
  });

  it("should extract multiple distinct variables", () => {
    const result = extractVariables("{{greeting}} {{name}}");
    expect(result).toEqual(["greeting", "name"]);
  });

  it("should deduplicate variables", () => {
    const result = extractVariables("{{input}} and again {{input}}");
    expect(result).toEqual(["input"]);
  });

  it("should handle valid javascript identifier rules", () => {
    const result = extractVariables("{{_var1}} {{$var2}} {{validVar}}");
    expect(result).toEqual(["_var1", "$var2", "validVar"]);
  });

  it("should ignore invalid javascript identifiers", () => {
    // 123invalid is invalid because it starts with a number
    const result = extractVariables("{{123invalid}} {{valid}}");
    expect(result).toEqual(["valid"]);
  });

  it("should handle extra spaces inside brackets", () => {
    const result = extractVariables("{{  spacedVar  }}");
    expect(result).toEqual(["spacedVar"]);
  });

  it("should return empty array when no variables exist", () => {
    const result = extractVariables("Just normal text here");
    expect(result).toEqual([]);
  });

  it("should return empty array for undefined or null", () => {
    expect(extractVariables(undefined)).toEqual([]);
    expect(extractVariables("")).toEqual([]);
  });
});
