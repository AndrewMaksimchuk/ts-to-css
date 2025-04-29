import type * as css from "./properties";

interface Specification {
  Name: string;
  Value: string;
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
