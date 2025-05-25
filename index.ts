import * as css from "./properties";
export * as atrule from "./at-rule";
export { selector } from "./selectors";

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

export const display = builder<css.display>("display", 1);
export const boxSizing = builder<css.boxSizing>("box-sizing", 1);
export const margin = builder<css.margin>("margin", 4);
export const marginTop = builder<css.marginTop>("margin-top", 1);
export const marginRight = builder<css.marginRight>("margin-right", 1);
export const marginBottom = builder<css.marginBottom>("margin-bottom", 1);
export const marginLeft = builder<css.marginLeft>("margin-left", 1);
export const marginBlock = builder<css.marginBlock>("margin-block", 2);
export const marginInline = builder<css.marginInline>("margin-inline", 2);
export const marginBlockStart = builder<css.marginBlockStart>(
  "margin-block-start",
  1
);
export const marginBlockEnd = builder<css.marginBlockEnd>(
  "margin-block-end",
  1
);
export const marginInlineStart = builder<css.marginInlineStart>(
  "margin-inline-start",
  1
);
export const marginInlineEnd = builder<css.marginInlineEnd>(
  "margin-inline-end",
  1
);
export const marginBreak = builder<css.marginBreak>("margin-break", 1);
export const marginTrim = builder<css.marginTrim>("margin-trim", 1);
export const accentColor = builder<css.accentColor>("accent-color", 1);
export const appearance = builder<css.appearence>("appearance", 1);

/** The all property is a shorthand that resets all CSS properties except direction and unicode-bidi. It only accepts the CSS-wide keywords. It does not reset custom properties */
export const all = builder<css.all>("all", 1);

/** The align-content property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note, this property has no effect on a single-line flex container. */
export const alignContent = builder<css.alignContent>("align-content", 1);

export const alignItems = builder<css.alignItems>("align-items", 1);
export const alignSelf = builder<css.alignSelf>("align-self", 1);

/** This property specifies the box’s alignment baseline: the baseline used to align the box prior to applying its post-alignment shift (if applicable). */
export const alignmentBaseline = builder<css.alignmentBaseline>(
  "alignment-baseline",
  1
);

/** The anchor-name property declares that an element is an anchor element, whose principal box is an anchor box, and gives it a list of anchor names to be targeted by. */
export const anchorName = builder<css.anchorName>("anchor-name", 1);

/** This property scopes the specified anchor names, and lookups for these anchor names, to this element’s subtree. */
export const anchorScope = builder<css.anchorScope>("anchor-scope", 1);

/** This property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions. */
export const aspectRatio = builder<css.aspectRatio>("aspect-ratio", 1);

export const azimuth = builder<css.azimuth>("azimuth", 1);
