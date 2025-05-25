import * as cssValues from "./values";

interface Specification {
  Name: string;
  Value: string | number;
  Initial: string;
  "Applies to": string;
  Inherited: string;
  Percentages: string;
  "Computed value": string;
  "Canonical order": string;
  "Animation type": string;
}

function builder<T extends Specification>(
  name: T["Name"],
  valueCounter: 1
): (value: T["Value"]) => string;
function builder<T extends Specification>(
  name: T["Name"],
  valueCounter: 2
): (value: T["Value"], value2: T["Value"]) => string;
function builder<T extends Specification>(
  name: T["Name"],
  valueCounter: 3
): (value: T["Value"], value2: T["Value"], value3: T["Value"]) => string;
function builder<T extends Specification>(
  name: T["Name"],
  valueCounter: 4
): (
  value: T["Value"],
  value2: T["Value"],
  value3: T["Value"],
  value4: T["Value"]
) => string;

function builder<T extends Specification>(
  name: T["Name"],
  valueCounter: number
) {
  if (1 === valueCounter) return (value: T["Value"]) => `${name}: ${value};`;

  if (2 === valueCounter)
    return (value: T["Value"], value2: T["Value"]) =>
      `${name}: ${value} ${value2};`;

  if (3 === valueCounter)
    return (value: T["Value"], value2: T["Value"], value3: T["Value"]) =>
      `${name}: ${value} ${value2} ${value3};`;

  if (4 === valueCounter)
    return (
      value: T["Value"],
      value2: T["Value"],
      value3: T["Value"],
      value4: T["Value"]
    ) => `${name}: ${value} ${value2} ${value3} ${value4};`;

  throw new Error("Too many arguments");
}

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

type marginLeftValue = marginTopValue;

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
  Value: "auto" | "keep" | "discard";
  Initial: "auto";
  "Applies to": "all elements";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

type generateGroupOf2<T extends string> = `${T}` | `${T} ${T}`;
type generateGroupOf4<T extends string> =
  | `${T}`
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;

type marginTrimValueGroupFirst = generateGroupOf2<"block" | "inline">;
type marginTrimValueGroupSecond = generateGroupOf4<
  "block-start" | "inline-start" | "block-end" | "inline-end"
>;
type marginTrimValue =
  | "none"
  | marginTrimValueGroupFirst
  | marginTrimValueGroupSecond;

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

export interface accentColor {
  Name: "accent-color";
  Value: "auto" | cssValues.color;
  Initial: "auto";
  "Applies to": "all elements";
  Inherited: "yes";
  Percentages: "n/a";
  "Computed value": "the keyword 'auto' or a computed color";
  "Canonical order": "per grammar";
  "Animation type": "by computed value type";
}

type compatAuto =
  | "searchfield"
  | "textarea"
  | "push-button"
  | "slider-horizontal"
  | "checkbox"
  | "radio"
  | "square-button"
  | "menulist"
  | "listbox"
  | "meter"
  | "progress-bar"
  | "button";

export interface appearence {
  Name: "appearance";
  Value: "none" | "auto" | "textfield" | "menulist-button" | compatAuto;
  Initial: "none";
  "Applies to": "all elements";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface all {
  Name: "all";
  Value: "initial" | "inherit" | "unset";
  Initial: "see individual properties";
  "Applies to": "see individual properties";
  Inherited: "see individual properties";
  Percentages: "see individual properties";
  "Computed value": "see individual properties";
  "Canonical order": "per grammar";
  "Animation type": "see individual properties";
}

export interface alignContent {
  Name: "align-content";
  Value:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  Initial: "stretch";
  "Applies to": "multi-line flex containers";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface alignItems {
  Name: "align-items";
  Value: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  Initial: "stretch";
  "Applies to": "flex containers";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface alignSelf {
  Name: "align-self";
  Value: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  Initial: "stretch";
  "Applies to": "flex items";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface alignmentBaseline {
  Name: "alignment-baseline";
  Value:
    | "baseline"
    | "text-bottom"
    | "alphbetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "text-top";
  Initial: "baseline";
  "Applies to": "inline-level boxes, flex items, grid items, table cells, and SVG text content";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface anchorName {
  Name: "anchor-name";
  Value: "none" | cssValues.dashedIdent;
  Initial: "none";
  "Applies to": "all elements that generate a principal box";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "as specified";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

export interface anchorScope {
  Name: "anchor-scope";
  Value: "none" | "all" | cssValues.dashedIdent;
  Initial: "none";
  "Applies to": "all elements";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "as specified";
  "Canonical order": "per grammar";
  "Animation type": "discrete";
}

type aspectRationValue =
  | "auto"
  | cssValues.ratio
  | `auto ${cssValues.ratio}`
  | `${cssValues.ratio} auto`;

export interface aspectRatio {
  Name: "aspect-ratio";
  Value: aspectRationValue;
  Initial: "auto";
  "Applies to": "all elements except inline boxes and internal ruby or table boxes";
  Inherited: "no";
  Percentages: "n/a";
  "Computed value": "specified keyword or a pair of numbers";
  "Canonical order": "per grammar";
  "Animation type": "by computed value";
}

//[[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ]
type azimuthValue =
  | "left-side"
  | "far-left"
  | "left"
  | "center-left"
  | "center"
  | "center-right"
  | "right"
  | "far-right"
  | "right-side";

export interface azimuth {
  Name: "azimuth";
  Value:
    | cssValues.angle
    | azimuthValue
    | "leftwards"
    | "rightwards"
    | "inherit";
  Initial: "center";
  "Applies to": "all elements";
  Inherited: "yes";
  Percentages: "n/a";
  "Computed value": "normalized angel";
  "Canonical order": "";
  "Animation type": "";
}

export const display = builder<display>("display", 1);
export const boxSizing = builder<boxSizing>("box-sizing", 1);
export const margin = builder<margin>("margin", 4);
export const marginTop = builder<marginTop>("margin-top", 1);
export const marginRight = builder<marginRight>("margin-right", 1);
export const marginBottom = builder<marginBottom>("margin-bottom", 1);
export const marginLeft = builder<marginLeft>("margin-left", 1);
export const marginBlock = builder<marginBlock>("margin-block", 2);
export const marginInline = builder<marginInline>("margin-inline", 2);
export const marginBlockStart = builder<marginBlockStart>(
  "margin-block-start",
  1
);
export const marginBlockEnd = builder<marginBlockEnd>("margin-block-end", 1);
export const marginInlineStart = builder<marginInlineStart>(
  "margin-inline-start",
  1
);
export const marginInlineEnd = builder<marginInlineEnd>("margin-inline-end", 1);
export const marginBreak = builder<marginBreak>("margin-break", 1);
export const marginTrim = builder<marginTrim>("margin-trim", 1);
export const accentColor = builder<accentColor>("accent-color", 1);
export const appearance = builder<appearence>("appearance", 1);

/** The all property is a shorthand that resets all CSS properties except direction and unicode-bidi. It only accepts the CSS-wide keywords. It does not reset custom properties */
export const all = builder<all>("all", 1);

/** The align-content property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note, this property has no effect on a single-line flex container. */
export const alignContent = builder<alignContent>("align-content", 1);

export const alignItems = builder<alignItems>("align-items", 1);
export const alignSelf = builder<alignSelf>("align-self", 1);

/** This property specifies the box’s alignment baseline: the baseline used to align the box prior to applying its post-alignment shift (if applicable). */
export const alignmentBaseline = builder<alignmentBaseline>(
  "alignment-baseline",
  1
);

/** The anchor-name property declares that an element is an anchor element, whose principal box is an anchor box, and gives it a list of anchor names to be targeted by. */
export const anchorName = builder<anchorName>("anchor-name", 1);

/** This property scopes the specified anchor names, and lookups for these anchor names, to this element’s subtree. */
export const anchorScope = builder<anchorScope>("anchor-scope", 1);

/** This property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions. */
export const aspectRatio = builder<aspectRatio>("aspect-ratio", 1);

export const azimuth = builder<azimuth>("azimuth", 1);
