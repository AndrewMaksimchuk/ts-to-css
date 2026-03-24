import { describe, it, expect } from "vitest"
import { atrule, namespaces } from "../at-rule"

describe("at-rule @namespace", () => {
   it("namespaces() - should be default", () => {
      expect(namespaces("http://www.w3.org/1999/xhtml")).toMatchInlineSnapshot(`
        "@namespace url(http://www.w3.org/1999/xhtml);
        "
      `)
   })

   it("namespaces() - should be with prefix", () => {
      expect(namespaces("http://www.w3.org/2000/svg", "svg")).toMatchInlineSnapshot(`
        "@namespace svg url(http://www.w3.org/2000/svg);
        "
      `)
   })

   const rule = atrule("@namespace")

   it('atrule("@namespace") - should be default', () => {
      expect(rule("http://www.w3.org/1999/xhtml")).toMatchInlineSnapshot(`
        "@namespace url(http://www.w3.org/1999/xhtml);
        "
      `)
   })

   it('atrule("@namespace") - should be with prefix', () => {
      expect(rule("http://www.w3.org/2000/svg", "svg")).toMatchInlineSnapshot(`
        "@namespace svg url(http://www.w3.org/2000/svg);
        "
      `)
   })
})
