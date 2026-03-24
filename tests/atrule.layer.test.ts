import { describe, it, expect } from "vitest"
import { layer } from "../at-rule";

describe("at-rule @layer", () => {
   it("layer block without name", () => {
      const layerblock = layer(true)
      const rulelist = `\
      @layer foo { /* layer 1 */ }
      @layer foo { /* also layer 1 */ }`
      expect(layerblock(rulelist)).toMatchInlineSnapshot(`
        "@layer {
        	      @layer foo { /* layer 1 */ }
              @layer foo { /* also layer 1 */ }
        }"
      `);
   })

   it("layer block with name", () => {
      const layerblock = layer(true)
      const rulelist = `\
      @layer default { 
         p { margin-block: 0.75em; }
      }
      @layer theme {
         p { color: #222; }
      }`
      expect(layerblock(rulelist, "framework")).toMatchInlineSnapshot(`
        "@layer framework {
        	      @layer default { 
                 p { margin-block: 0.75em; }
              }
              @layer theme {
                 p { color: #222; }
              }
        }"
      `);
   })

   it("layer block with name select layer inside another layer", () => {
      const layerblock = layer(true)
      const rulelist = `\
      /* These styles will be added to the theme layer inside the framework layer */
      blockquote { color: rebeccapurple; }`
      expect(layerblock(rulelist, "framework.theme")).toMatchInlineSnapshot(`
        "@layer framework.theme {
        	      /* These styles will be added to the theme layer inside the framework layer */
              blockquote { color: rebeccapurple; }
        }"
      `);
   })

   it("layer statement", () => {
       const layerstatement = layer(false);
       expect(layerstatement("default, theme, components")).toMatchInlineSnapshot(`"@layer default, theme, components;"`);
   })
})
