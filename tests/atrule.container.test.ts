import { describe, it, expect } from "vitest"
import { container } from "../at-rule"

describe("at-rule @container", () => {
   it("@container (width > 400px)", () => {
    expect(container("(width > 400px)", "h2 { font-size: 1.5em; }")).toMatchInlineSnapshot(`
      "@container (width > 400px) {
      	h2 { font-size: 1.5em; }
      }"
    `)
   })

   it("@container tall (height > 30rem)", () => {
    expect(container("tall (height > 30rem)", "p { line-height: 1.6; }")).toMatchInlineSnapshot(`
      "@container tall (height > 30rem) {
      	p { line-height: 1.6; }
      }"
    `)
   })

   it("@container sidebar", () => {
    expect(container("sidebar", "h2 { background: blue; }")).toMatchInlineSnapshot(`
      "@container sidebar {
      	h2 { background: blue; }
      }"
    `)
   })

   it("@container scroll-state(scrollable: top)", () => {
    expect(container("scroll-state(scrollable: top)", ".back-to-top-link { visibility: visible; }")).toMatchInlineSnapshot(`
      "@container scroll-state(scrollable: top) {
      	.back-to-top-link { visibility: visible; }
      }"
    `)
   })

   it("@container sticky-heading scroll-state(stuck: top)", () => {
    expect(container("sticky-heading scroll-state(stuck: top)", "h2 { background: purple; color: white; }")).toMatchInlineSnapshot(`
      "@container sticky-heading scroll-state(stuck: top) {
      	h2 { background: purple; color: white; }
      }"
    `)
   })

   it("@container (width > 400px) and style(--responsive: true)", () => {
    expect(container("(width > 400px) and style(--responsive: true)", "h2 { font-size: 1.5em; }")).toMatchInlineSnapshot(`
      "@container (width > 400px) and style(--responsive: true) {
      	h2 { font-size: 1.5em; }
      }"
    `)
   })

   it("@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top)", () => {
    expect(container("card (width > 400px), style(--responsive: true), scroll-state(stuck: top)", "h2 { font-size: 1.5em; }")).toMatchInlineSnapshot(`
      "@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
      	h2 { font-size: 1.5em; }
      }"
    `)
   })
})
