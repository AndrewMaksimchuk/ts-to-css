// Source: https://www.w3.org/TR/selectors-4/

import {
  whitespace,
  comment,
  identToken,
  hashToken,
  stringToken,
} from "./token";

/** GRAMMAR START */
namespace grammar {
  // Source: https://www.w3.org/TR/selectors-4/#grammar

  //A double ampersand (&&) separates two or more components, all of which must occur, in any order.
  //A double bar (||) separates two or more options: one or more of them must occur, in any order.
  //A bar (|) separates two or more alternatives: exactly one of them must occur.

  //Brackets ([ ]) are for grouping
  type grouping<T> = T;

  //An asterisk (*) indicates that the preceding type, word, or group occurs zero or more times.
  type asterisk<T extends string> =
    | ""
    | `${T}`
    | `${T} ${T}`
    | `${T} ${T} ${T}`
    | `${T} ${T} ${T} ${T}`;

  //A plus (+) indicates that the preceding type, word, or group occurs one or more times.
  type plus<T extends string> =
    | `${T}`
    | `${T} ${T}`
    | `${T} ${T} ${T}`
    | `${T} ${T} ${T} ${T}`;

  //A question mark (?) indicates that the preceding type, word, or group is optional (occurs zero or one times).
  type questionMark<T extends string> = asterisk<T>;

  //A single number in curly braces ({A}) indicates that the preceding type, word, or group occurs A times.
  // type curlyBrace<T extends string, N extends number> =

  //A comma-separated pair of numbers in curly braces ({A,B}) indicates that the preceding type, word, or group occurs at least A and at most B times. The B may be omitted ({A,}) to indicate that there must be at least A repetitions, with no upper bound on the number of repetitions.
  // type curlyBracePair<T extends string, A extends number, B extends number> =

  type surroundedByOptionally<T extends string, U extends string> =
    | T
    | `${T}${U}`
    | `${U}${T}`
    | `${U}${T}${U}`;

  /** A hash mark (#) indicates that the preceding type, word, or group occurs one or more times, separated by comma tokens (which may optionally be surrounded by white space and/or comments). It may optionally be followed by the curly brace forms, above, to indicate precisely how many times the repetition occurs, like <length>#{1,4}. */
  type hashMark<
    T extends string,
    N extends number = 1
  > = surroundedByOptionally<
    T,
    `${whitespace}${comment}` | whitespace | comment
  >;

  //An exclamation point (!) after a group indicates that the group is required and must produce at least one value; even if the grammar of the items within the group would otherwise allow the entire contents to be omitted, at least one component value must not be omitted.

  //Combinator and Multiplier Patterns
  //              in order 	      any order
  //zero or more 	A? B? C? 	      A? || B? || C?
  //one or more 	[ A? B? C? ]! 	A || B || C
  //all 	        A B C 	        A && B && C

  type selectorList = complexSelectorList;
  type complexSelectorList = hashMark<complexSelector>;
  type compoundSelectorList = hashMark<compoundSelector>;
  type simpleSelectorList = hashMark<simpleSelector>;
  type relativeSelectorList = hashMark<relativeSelector>;
  type complexSelector =
    | compoundSelector
    | asterisk<
        grouping<compoundSelector | `${combinator} ${compoundSelector}`>
      >;
  type relativeSelector =
    | `${combinator} ${complexSelector}`
    | `${complexSelector}`;
  // type compoundSelector =
  // asterisk<grouping<pseudoElementSelector | `${pseudoElementSelector} ${asterisk<pseudoClassSelector>}`>>

  type simpleSelector = typeSelector | subclassSelector;
  type combinator = ">" | "+" | "~" | grouping<"|">; // [ '|' '|' ] - is grouping<'|'> but is not correct
  type typeSelector = wqName | `${nsPrefix} *` | "*";
  type nsPrefix = `${questionMark<grouping<identToken | "*">>} |`;
  type wqName = `${questionMark<nsPrefix>}${identToken}`;
  type subclassSelector =
    | idSelector
    | classSelector
    | attributeSelector
    | pseudoClassSelector;
  type idSelector = "#";
  type classSelector = `.${identToken}`;
  type attributeSelector =
    | `[${wqName}]`
    | `[${wqName}${attrMatcher}${grouping<
        stringToken | identToken
      >}${questionMark<attrModifier>}]`;
  type attrMatcher = `${questionMark<grouping<"~" | "|" | "^" | "$" | "*">>}=`;
  type attrModifier = "i" | "s";
  type pseudoClassSelector = `:${identToken}` | `:${functionToken}${anyValue})`;
  type pseudoElementSelector = `:${pseudoClassSelector}`;
}
/** GRAMMAR END */

type universalSelector = "*";

// type selector - tag name
type typeSelector =
  | "html"
  | "head"
  | "title"
  | "base"
  | "link"
  | "meta"
  | "style"
  | "body"
  | "article"
  | "section"
  | "nav"
  | "aside"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "hgroup"
  | "header"
  | "footer"
  | "address"
  | "p"
  | "hr"
  | "pre"
  | "blockquote"
  | "ol"
  | "ul"
  | "menu"
  | "li"
  | "dl"
  | "dt"
  | "dd"
  | "figure"
  | "figcaption"
  | "main"
  | "search"
  | "div"
  | "a"
  | "em"
  | "strong"
  | "small"
  | "s"
  | "cite"
  | "q"
  | "dfn"
  | "abbr"
  | "ruby"
  | "rt"
  | "rp"
  | "data"
  | "time"
  | "code"
  | "var"
  | "samp"
  | "kbd"
  | "sub"
  | "sup"
  | "i"
  | "b"
  | "u"
  | "mark"
  | "bdi"
  | "bdo"
  | "span"
  | "br"
  | "wbr"
  | "ins"
  | "del"
  | "picture"
  | "source"
  | "img"
  | "iframe"
  | "embed"
  | "object"
  | "video"
  | "audio"
  | "track"
  | "map"
  | "area"
  | "table"
  | "cation"
  | "colgroup"
  | "col"
  | "tbody"
  | "thead"
  | "tfoot"
  | "tr"
  | "td"
  | "th"
  | "form"
  | "label"
  | "input"
  | "button"
  | "select"
  | "datalist"
  | "optgroup"
  | "option"
  | "textarea"
  | "output"
  | "progress"
  | "meter"
  | "fieldset"
  | "legend"
  | "details"
  | "summary"
  | "dialog"
  | "script"
  | "noscript"
  | "template"
  | "slot"
  | "canvas";

type nthLastColPseudoClass = `${typeSelector}:nth-last-col(${number})`;
type nthColPseudoClass = `${typeSelector}:nth-col(${number})`;
type columnCombinator = `${typeSelector} || ${typeSelector}`;

type subsequentSiblongCombinator = `${typeSelector} ~ ${typeSelector}`;
type nextSiblingCombinator = `${typeSelector} + ${typeSelector}`;
type childCombinator = `${typeSelector} > ${typeSelector}`;
type descendantCombinator = `${typeSelector} ${typeSelector}`;

type typeSelectorWithPseudoClass<pseudoClass extends string> =
  `${typeSelector}:${pseudoClass}`;

type PseudoClass = typeSelectorWithPseudoClass<'only-of-type'>;
type PseudoClass = typeSelectorWithPseudoClass<'last-of-type'>;
type PseudoClass = typeSelectorWithPseudoClass<'first-of-type'>;
type PseudoClass = typeSelectorWithPseudoClass<`nth-last-of-type(${string})`>;
type PseudoClass = typeSelectorWithPseudoClass<`nth-of-type(${string})`>;
type PseudoClass = typeSelectorWithPseudoClass<'only-child'>;
type PseudoClass = typeSelectorWithPseudoClass<'last-child'>;
type PseudoClass = typeSelectorWithPseudoClass<'first-child'>;
type PseudoClass = typeSelectorWithPseudoClass<`nth-last-child(${string})`>;
type PseudoClass = typeSelectorWithPseudoClass<`nth-child(${string})`>;
type PseudoClass = typeSelectorWithPseudoClass<'empty'>;
type PseudoClass = typeSelectorWithPseudoClass<'root'>;

type PseudoClass = typeSelectorWithPseudoClass<'user-invalid'>;
type PseudoClass = typeSelectorWithPseudoClass<'blank'>;
type PseudoClass = typeSelectorWithPseudoClass<'optional'>;
type PseudoClass = typeSelectorWithPseudoClass<'required'>;
type PseudoClass = typeSelectorWithPseudoClass<'out-of-range'>;
type PseudoClass = typeSelectorWithPseudoClass<'in-range'>;
type PseudoClass = typeSelectorWithPseudoClass<'invalid'>;
type PseudoClass = typeSelectorWithPseudoClass<'valid'>;
type PseudoClass = typeSelectorWithPseudoClass<'indeterminate'>;
type PseudoClass = typeSelectorWithPseudoClass<'checked'>;
type PseudoClass = typeSelectorWithPseudoClass<'default'>;
type PseudoClass = typeSelectorWithPseudoClass<'placeholder-shown'>;
type PseudoClass = typeSelectorWithPseudoClass<'read-only'>;
type PseudoClass = typeSelectorWithPseudoClass<'read-write'>;
type PseudoClass = typeSelectorWithPseudoClass<'disabled'>;
type PseudoClass = typeSelectorWithPseudoClass<'enabled'>;

type focusvisiblePseudoClass = typeSelectorWithPseudoClass<'focus-visible'>;
type focuswithinPseudoClass = typeSelectorWithPseudoClass<'focus-within'>;
type focusPseudoClass = typeSelectorWithPseudoClass<'focus'>;
type hoverPseudoClass = typeSelectorWithPseudoClass<'hover'>;
type activePseudoClass = typeSelectorWithPseudoClass<'active'>;

type futurePseudoClass = typeSelectorWithPseudoClass<'future'>;
type pastPseudoClass = typeSelectorWithPseudoClass<'past'>;
type currentDeepestPseudoClass =
  typeSelectorWithPseudoClass<`current(${string})`>;
type currentPseudoClass = typeSelectorWithPseudoClass<"current">;

type referenceElementScopePseudoClass = `${typeSelector}:scope`;
type targetContainerTargetWithinPseudoClass = `${typeSelector}:target-within`;
type targetPseudoClass = `${typeSelector}:target`;
type localLinkPseudoClass = `${typeSelector}:local-link`;
type linkHistoryVisitedPseudoClass = `${typeSelector}:visited`;
type linkHistoryLinkPseudoClass = `${typeSelector}:link`;
type hyperlinkAnyLinkPseudoClass = `${typeSelector}:any-link`;

type languageLangPseudoClass = `${typeSelector}:lang(${string}, ${string})`;
type directionalityDirPseudoClass = `${typeSelector}:dir(${string})`;

type attribute = string;
type attributeValue = string;

type attributePresenceAndValueSelector =
  | `${typeSelector}[${attribute}]`
  | `${typeSelector}[${attribute}="${attributeValue}"]`
  | `${typeSelector}[${attribute}="${attributeValue}" i]`
  | `${typeSelector}[${attribute}="${attributeValue}" s]`
  | `${typeSelector}[${attribute}~="${attributeValue}"]`
  | `${typeSelector}[${attribute}^="${attributeValue}"]`
  | `${typeSelector}[${attribute}$="${attributeValue}"]`
  | `${typeSelector}[${attribute}*="${attributeValue}"]`
  | `${typeSelector}[${attribute}|="${attributeValue}"]`;

type idSelector = `${typeSelector}#${string}` | `#${string}`;
type classSelector = `${typeSelector}.${string}` | `.${string}`;
type relationalHasPseudoClass = `${typeSelector}:has(${selectorList})`;
type specificityAdjustmentWherePseudoClass =
  `${typeSelector}:where(${selectorList})`;
type matchesAnyIsPseudoClass = `${typeSelector}:is(${selectorList})`;
type negationNotPseudoClass = `${typeSelector}:not(${selectorList})`;

type namespaceParts<element extends string> =
  | `*|${element}`
  | `|${element}`
  | element;

/** Type selectors and universal selectors allow an optional namespace component: a namespace prefix that has been previously declared may be prepended to the element name separated by the namespace separator “vertical bar” (| U+007C). */
type namespace<
  element extends typeSelector | universalSelector,
  ns = unknown
> = ns extends string ? `${ns}|${element}` : namespaceParts<element>;

type Selector =
  | namespace<universalSelector>
  | namespace<typeSelector>
  | negationNotPseudoClass
  | matchesAnyIsPseudoClass
  | specificityAdjustmentWherePseudoClass
  | relationalHasPseudoClass
  | classSelector
  | idSelector
  | attributePresenceAndValueSelector;

export function selector(name: Selector, ...properties: string[]) {
  return `${name} {\n${properties
    .map((property) => `\t${property}`)
    .join("\n")}\n}`;
}
