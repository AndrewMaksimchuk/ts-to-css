import { describe, it, expect } from "vitest"
import { atrule, page } from "../at-rule"

describe("at-rule @page", () => {
  it('page("", "")', () => {
    expect(page("", "")).toMatchInlineSnapshot(`
      "@page {
      	
      }"
    `);
  });

  it('page(":left", "")', () => {
    expect(page(":left", "")).toMatchInlineSnapshot(`
      "@page :left {
      	
      }"
    `);
  });

  it('page(":right", "")', () => {
    expect(page(":right", "")).toMatchInlineSnapshot(`
      "@page :right {
      	
      }"
    `);
  });

  it('page("LandscapeTable", "")', () => {
    expect(page("LandscapeTable", "")).toMatchInlineSnapshot(`
      "@page LandscapeTable {
      	
      }"
    `);
  });

  it('page("CompanyLetterHead:first", "")', () => {
    expect(page("CompanyLetterHead:first", "")).toMatchInlineSnapshot(`
      "@page CompanyLetterHead:first {
      	
      }"
    `);
  });

  it('page("@page:first", "")', () => {
    expect(page("@page:first", "")).toMatchInlineSnapshot(`
      "@page:first {
      	
      }"
    `);
  });

  it('page("toc, index", "")', () => {
    expect(page("toc, index", "")).toMatchInlineSnapshot(`
      "@page toc, index {
      	
      }"
    `);
  });

  it('page(":blank:first", "")', () => {
    expect(page(":blank:first", "")).toMatchInlineSnapshot(`
      "@page :blank:first {
      	
      }"
    `);
  });

  it('page("",  "@top-left { } @bottom-center { }")', () => {
    expect(page("", "@top-left { } @bottom-center { }")).toMatchInlineSnapshot(`
      "@page {
      	@top-left { } @bottom-center { }
      }"
    `);
  });

  it('page(":left", "@left-middle { }")', () => {
    expect(page(":left", "@left-middle { }")).toMatchInlineSnapshot(`
      "@page :left {
      	@left-middle { }
      }"
    `);
  });

  it('page(":right", "@right-middle { }")', () => {
    expect(page(":right", "@right-middle { }")).toMatchInlineSnapshot(`
      "@page :right {
      	@right-middle { }
      }"
    `);
  });

  it('page(":left", "@bottom-left-corner { }")', () => {
    expect(page(":left", "@bottom-left-corner { }")).toMatchInlineSnapshot(`
      "@page :left {
      	@bottom-left-corner { }
      }"
    `);
  });

  it('page(":right", "@bottom-right-corner { }")', () => {
    expect(page(":right", "@bottom-right-corner { }")).toMatchInlineSnapshot(`
      "@page :right {
      	@bottom-right-corner { }
      }"
    `);
  });

  it('page(":first", "@bottom-left-corner { } @bottom-right-corner { }")', () => {
    const content = "@bottom-left-corner { } @bottom-right-corner { }";
    expect(page(":first", content)).toMatchInlineSnapshot(`
      "@page :first {
      	@bottom-left-corner { } @bottom-right-corner { }
      }"
    `);
  });

  it('page(":left", "margin-left: 4cm;")', () => {
    expect(page(":left", "margin-left: 4cm;")).toMatchInlineSnapshot(`
      "@page :left {
      	margin-left: 4cm;
      }"
    `);
  });

  it('page("", "margin: 25mm;")', () => {
    expect(page("", "margin: 25mm;")).toMatchInlineSnapshot(`
      "@page {
      	margin: 25mm;
      }"
    `);
  });

  it('page("", content)', () => {
    const content = ` color: green;
    @top-left {
      content: "foo";
      color: blue;
    }
    @top-right {
      content: "bar";
    }`;
    expect(page("", content)).toMatchInlineSnapshot(`
      "@page {
      	 color: green;
          @top-left {
            content: "foo";
            color: blue;
          }
          @top-right {
            content: "bar";
          }
      }"
    `);
  });

  it('atrule("@page")', () => {
    const rule = atrule("@page")
    expect(rule("", "margin: 25mm;")).toMatchInlineSnapshot(`
      "@page {
      	margin: 25mm;
      }"
    `)
  })
});
