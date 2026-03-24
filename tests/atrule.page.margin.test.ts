import { describe, it, expect } from 'vitest'
import { atrule, pageMarginRule } from '../at-rule'

describe("at-rule page margin rules", () => {
    it("@top-left-corner", () => {
        const rule = atrule("@top-left-corner");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@top-left-corner {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@top-left", () => {
        const rule = atrule("@top-left");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@top-left {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@top-center", () => {
        const rule = atrule("@top-center");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@top-center {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@top-right", () => {
        const rule = atrule("@top-right");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@top-right {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@top-right-corner", () => {
        const rule = atrule("@top-right-corner");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@top-right-corner {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@bottom-left-corner", () => {
        const rule = atrule("@bottom-left-corner");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@bottom-left-corner {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@bottom-left", () => {
        const rule = atrule("@bottom-left");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@bottom-left {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@bottom-center", () => {
        const rule = atrule("@bottom-center");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@bottom-center {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@bottom-right", () => {
        const rule = atrule("@bottom-right");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@bottom-right {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@bottom-right-corner", () => {
        const rule = atrule("@bottom-right-corner");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@bottom-right-corner {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@left-top", () => {
        const rule = atrule("@left-top");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@left-top {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@left-middle", () => {
        const rule = atrule("@left-middle");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@left-middle {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@left-bottom", () => {
        const rule = atrule("@left-bottom");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@left-bottom {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@right-top", () => {
        const rule = atrule("@right-top");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@right-top {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@right-middle", () => {
        const rule = atrule("@right-middle");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@right-middle {
          	content: "Page " counter(page);
          }"
        `);
    })

    it("@right-bottom", () => {
        const rule = atrule("@right-bottom");
        expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
          "@right-bottom {
          	content: "Page " counter(page);
          }"
        `);
    })

    it('pageMarginRule("@top-left-corner")', () => {
      const rule = pageMarginRule("@top-left-corner")
      expect(rule('content: "Page " counter(page);')).toMatchInlineSnapshot(`
        "@top-left-corner {
        	content: "Page " counter(page);
        }"
      `)
    })
})
