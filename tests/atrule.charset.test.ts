import { describe, it, expect } from "vitest"
import { atrule, charset } from "../at-rule"

describe("at-rule @charset", () => {
  it('atrule("@charset") - should be UTF-8', () => {
    const rule = atrule("@charset");
    expect(rule("UTF-8")).toMatchInlineSnapshot(`
      "@charset "UTF-8";
      "
    `);
  });

  it('charset("UTF-8" - should be UTF-8', () => {
    expect(charset("UTF-8")).toMatchInlineSnapshot(`
      "@charset "UTF-8";
      "
    `);
  });
});
