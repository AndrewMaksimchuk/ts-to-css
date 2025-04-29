import * as cssValues from "./values";

type displayOutside = "block" | "inline" | "run-in";
type displayInside = "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby";
type displayType = displayOutside | displayInside;
type displayListitem = displayOutside | "flow" | "flow-root" | "list-item";
type displayInternal =
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container";
type displayBox = "contents" | "none";
type displayLegacy =
  | "inline-block"
  | "inline-table"
  | "inline-flex"
  | "inline-grid";

export interface display {
  Name: "display";
  Value:
    | displayType
    | displayListitem
    | displayInternal
    | displayBox
    | displayLegacy
    | cssValues.cssWideKeywords;
  Initial: "inline";
  "Applies to": "all elements";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "a pair of keywords representing the inner and outer display types plus optional list-item flag, or a <display-internal> or <display-box> keyword; see prose in a variety of specs for computation rules ";
  "Canonical order": "per grammar";
  "Animation type": "not animatable";
}

export interface boxSizing {
  Name: "box-sizing";
  Value: "content-box" | "border-box" | cssValues.cssWideKeywords;
  Initial: "content-box";
  "Applies to": "all elements that accept width or height";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified value";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

type marginTopValue = cssValues.lengthPercentage | "auto";

export interface margin {
  Name: "margin";
  Value: marginTopValue | cssValues.cssWideKeywords;
  Initial: "0";
  "Applies to": "see individual properties ";
  Inherited: "no";
  Percentages: "refer to logical width of containing block";
  "Computed value": "see individual properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

export interface marginTop {
  Name: "margin-top";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "refer to logical width of containing block";
  "Computed value": "the keyword 'auto' or a computed <length-percentage> value";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

export interface marginRight {
  Name: "margin-right";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "refer to logical width of containing block";
  "Computed value": "the keyword 'auto' or a computed <length-percentage> value";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

export interface marginBottom {
  Name: "margin-bottom";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "refer to logical width of containing block";
  "Computed value": "the keyword 'auto' or a computed <length-percentage> value";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

export interface marginLeft {
  Name: "margin-left";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "refer to logical width of containing block";
  "Computed value": "the keyword 'auto' or a computed <length-percentage> value";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

type marginLeftValue = marginTopValue

export interface marginBlock {
  Name: "margin-block";
  Value: marginLeftValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

export interface marginInline {
  Name: "margin-inline";
  Value: marginLeftValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
  "Logical property group": "margin";
}

export interface marginBlockStart {
  Name: "margin-block-start";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

export interface marginBlockEnd {
  Name: "margin-block-end";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

export interface marginInlineStart {
  Name: "margin-inline-start";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

export interface marginInlineEnd {
  Name: "margin-inline-end";
  Value: marginTopValue;
  Initial: "0";
  "Applies to": "all elements except internal table elements";
  Inherited: "no";
  Percentages: "As for the corresponding physical property";
  "Computed value": "Same as corresponding margin-* properties";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

export interface marginBreak {
  Name: "margin-break";
  Value: "auto" | 'keep' | 'discard';
  Initial: "auto";
  "Applies to": "all elements";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

type generateGroupOf2<T extends string> = `${T}` | `${T} ${T}`
type generateGroupOf4<T extends string> = `${T}` | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`

type marginTrimValueGroupFirst = generateGroupOf2<'block' | 'inline'>
type marginTrimValueGroupSecond = generateGroupOf4<'block-start' | 'inline-start' | 'block-end' | 'inline-end'>
type marginTrimValue = 'none' | marginTrimValueGroupFirst | marginTrimValueGroupSecond;

export interface marginTrim {
  Name: "margin-trim";
  Value: marginTrimValue;
  Initial: "none";
  "Applies to": "block containers, multi-column containers, flex containers, grid containers";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "a set of zero to four keywords indicating which sides to trim";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}
