// Source: https://www.w3.org/TR/selectors-4/

type AnPlusBmicrosyntax =
  | `${number}n+${number}`
  | `${number}n-${number}`
  | `${number}n`
  | number
  | "even" /*2n*/
  | "odd" /*2n+1*/;

// https://www.w3.org/TR/selectors-4/#structure - describe below type selectors
type simpleSelector =
  | typeSelector
  | universalSelector
  | attributeSelector
  | classSelector
  | idSelector
  | pseudoClassSelector;
type combinator = " " | ">" | "+" | "~";
type compoundSelector = `${simpleSelector}${simpleSelector}`;
type complexSelector = `${simpleSelector}${combinator}${simpleSelector}`;
type commaSeparatedList<T extends string | number = string> =
  | `${T}`
  | `${T}, ${T}`
  | `${T}, ${T}, ${T}`
  | `${T}, ${T}, ${T}, ${T}`
  | `${T}, ${T}, ${T}, ${T}, ${T}`;
type selectorList = commaSeparatedList<
  simpleSelector | compoundSelector | complexSelector
>;

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

type columnCombinator = `${compoundSelector} || ${compoundSelector}`;
type subsequentSiblongCombinator = `${compoundSelector} ~ ${compoundSelector}`;
type nextSiblingCombinator = `${compoundSelector} + ${compoundSelector}`;
type childCombinator = `${compoundSelector} > ${compoundSelector}`;
type descendantCombinator = `${compoundSelector} ${compoundSelector}`;

type pseudoClassName =
  | "not"
  | "is"
  | "where"
  | "has"
  | "dir"
  | "lang"
  | "any-link"
  | "link"
  | "visited"
  | "local-link"
  | "target"
  | "target-within"
  | "scope"
  | "current"
  | "past"
  | "future"
  | "active"
  | "hover"
  | "focus"
  | "focus-within"
  | "focus-visible"
  | "enabled"
  | "disabled"
  | "read-write"
  | "read-only"
  | "placeholder-shown"
  | "default"
  | "checked"
  | "indeterminate"
  | "valid"
  | "invalid"
  | "in-range"
  | "out-of-range"
  | "required"
  | "optional"
  | "blank"
  | "user-invalid"
  | "root"
  | "empty"
  | "nth-child"
  | "nth-last-child"
  | "first-child"
  | "last-child"
  | "only-child"
  | "nth-of-type"
  | "nth-last-of-type"
  | "first-of-type"
  | "last-of-type"
  | "only-of-type"
  | "nth-col"
  | "nth-last-col"
  | "host"
  | "host-context"
  | "defined"
  | "playing"
  | "paused"
  | "seeking"
  | "buffering"
  | "stalled"
  | "muted"
  | "volume-locked"
  | "open"
  | "closed"
  | "fullscreen"
  | "picture-in-picture"
  | "autofill";

type functionPseudoClass<
  T extends pseudoClassName,
  A extends string | number = string
> = `:${T}(${commaSeparatedList<A>})`;
type regularPseudoClass<T extends pseudoClassName> = `:${T}`;

type pseudoClassSelector =
  | functionPseudoClass<"not">
  | functionPseudoClass<"is">
  | functionPseudoClass<"where">
  | functionPseudoClass<"has">
  | functionPseudoClass<"dir">
  | functionPseudoClass<"lang">
  | regularPseudoClass<"any-link">
  | regularPseudoClass<"link">
  | regularPseudoClass<"visited">
  | regularPseudoClass<"local-link">
  | regularPseudoClass<"target">
  | regularPseudoClass<"target-within">
  | regularPseudoClass<"scope">
  | regularPseudoClass<"current">
  | functionPseudoClass<"current">
  | regularPseudoClass<"past">
  | regularPseudoClass<"future">
  | regularPseudoClass<"active">
  | regularPseudoClass<"hover">
  | regularPseudoClass<"focus">
  | regularPseudoClass<"focus-within">
  | regularPseudoClass<"focus-visible">
  | regularPseudoClass<"enabled">
  | regularPseudoClass<"disabled">
  | regularPseudoClass<"read-write">
  | regularPseudoClass<"read-only">
  | regularPseudoClass<"placeholder-shown">
  | regularPseudoClass<"default">
  | regularPseudoClass<"checked">
  | regularPseudoClass<"indeterminate">
  | regularPseudoClass<"valid">
  | regularPseudoClass<"invalid">
  | regularPseudoClass<"in-range">
  | regularPseudoClass<"out-of-range">
  | regularPseudoClass<"required">
  | regularPseudoClass<"optional">
  | regularPseudoClass<"blank">
  | regularPseudoClass<"user-invalid">
  | regularPseudoClass<"root">
  | regularPseudoClass<"empty">
  | functionPseudoClass<"nth-child", AnPlusBmicrosyntax>
  | functionPseudoClass<"nth-last-child", AnPlusBmicrosyntax>
  | regularPseudoClass<"first-child">
  | regularPseudoClass<"last-child">
  | regularPseudoClass<"only-child">
  | functionPseudoClass<"nth-of-type">
  | functionPseudoClass<"nth-last-of-type">
  | regularPseudoClass<"first-of-type">
  | regularPseudoClass<"last-of-type">
  | regularPseudoClass<"only-of-type">
  | functionPseudoClass<"nth-col">
  | functionPseudoClass<"nth-last-col">
  | regularPseudoClass<"host">
  | functionPseudoClass<"host">
  | functionPseudoClass<"host-context">
  | regularPseudoClass<"defined">
  | regularPseudoClass<"playing">
  | regularPseudoClass<"paused">
  | regularPseudoClass<"seeking">
  | regularPseudoClass<"buffering">
  | regularPseudoClass<"stalled">
  | regularPseudoClass<"muted">
  | regularPseudoClass<"volume-locked">
  | regularPseudoClass<"open">
  | regularPseudoClass<"closed">
  | regularPseudoClass<"fullscreen">
  | regularPseudoClass<"picture-in-picture">
  | regularPseudoClass<"autofill">;

type typeSelectorWithPseudoClass<pseudoClass extends string> =
  `${typeSelector}:${pseudoClass}`;

type nthLastColPseudoClass =
  typeSelectorWithPseudoClass<`nth-last-col(${AnPlusBmicrosyntax})`>;
type nthColPseudoClass =
  typeSelectorWithPseudoClass<`nth-col(${AnPlusBmicrosyntax})`>;
type onlyOfTypePseudoClass = typeSelectorWithPseudoClass<"only-of-type">;
type lastOfTypePseudoClass = typeSelectorWithPseudoClass<"last-of-type">;
type firstOfTypePseudoClass = typeSelectorWithPseudoClass<"first-of-type">;
type nthLastOfTypePseudoClass =
  typeSelectorWithPseudoClass<`nth-last-of-type(${AnPlusBmicrosyntax})`>;
type nthOfTypePseudoClass =
  typeSelectorWithPseudoClass<`nth-of-type(${AnPlusBmicrosyntax})`>;
type onlyChildPseudoClass = typeSelectorWithPseudoClass<"only-child">;
type lastChildPseudoClass = typeSelectorWithPseudoClass<"last-child">;
type firstChildPseudoClass = typeSelectorWithPseudoClass<"first-child">;
type nthLastChildPseudoClass =
  typeSelectorWithPseudoClass<`nth-last-child(${AnPlusBmicrosyntax})`>;
type nthChildPseudoClass =
  typeSelectorWithPseudoClass<`nth-child(${AnPlusBmicrosyntax})`>;
type emptyPseudoClass = typeSelectorWithPseudoClass<"empty">;
type rootPseudoClass = typeSelectorWithPseudoClass<"root">;

type userInvalidPseudoClass = typeSelectorWithPseudoClass<"user-invalid">;
type blankPseudoClass = typeSelectorWithPseudoClass<"blank">;
type optionalPseudoClass = typeSelectorWithPseudoClass<"optional">;
type requiredPseudoClass = typeSelectorWithPseudoClass<"required">;
type outOfRangePseudoClass = typeSelectorWithPseudoClass<"out-of-range">;
type inRangePseudoClass = typeSelectorWithPseudoClass<"in-range">;
type invalidPseudoClass = typeSelectorWithPseudoClass<"invalid">;
type validPseudoClass = typeSelectorWithPseudoClass<"valid">;
type indeterminatePseudoClass = typeSelectorWithPseudoClass<"indeterminate">;
type checkedPseudoClass = typeSelectorWithPseudoClass<"checked">;
type defaultPseudoClass = typeSelectorWithPseudoClass<"default">;
type autofillPseudoClass = typeSelectorWithPseudoClass<"autofill">;
type placeholderShownPseudoClass =
  typeSelectorWithPseudoClass<"placeholder-shown">;
type readOnlyPseudoClass = typeSelectorWithPseudoClass<"read-only">;
type readWritePseudoClass = typeSelectorWithPseudoClass<"read-write">;
type disabledPseudoClass = typeSelectorWithPseudoClass<"disabled">;
type enabledPseudoClass = typeSelectorWithPseudoClass<"enabled">;

type focusvisiblePseudoClass = typeSelectorWithPseudoClass<"focus-visible">;
type focuswithinPseudoClass = typeSelectorWithPseudoClass<"focus-within">;
type focusPseudoClass = typeSelectorWithPseudoClass<"focus">;
type hoverPseudoClass = typeSelectorWithPseudoClass<"hover">;
type activePseudoClass = typeSelectorWithPseudoClass<"active">;

type futurePseudoClass = typeSelectorWithPseudoClass<"future">;
type pastPseudoClass = typeSelectorWithPseudoClass<"past">;
type currentDeepestPseudoClass =
  typeSelectorWithPseudoClass<`current(${commaSeparatedList})`>;
type currentPseudoClass = typeSelectorWithPseudoClass<"current">;

type referenceElementScopePseudoClass = typeSelectorWithPseudoClass<`scope`>;
type targetContainerTargetWithinPseudoClass =
  typeSelectorWithPseudoClass<`target-within`>;
type targetPseudoClass = typeSelectorWithPseudoClass<`target`>;
type localLinkPseudoClass = typeSelectorWithPseudoClass<`local-link`>;
type linkHistoryVisitedPseudoClass = typeSelectorWithPseudoClass<`visited`>;
type linkHistoryLinkPseudoClass = typeSelectorWithPseudoClass<`link`>;
type hyperlinkAnyLinkPseudoClass = typeSelectorWithPseudoClass<`any-link`>;

type languageLangPseudoClass =
  typeSelectorWithPseudoClass<`lang(${commaSeparatedList})`>;
type directionalityDirPseudoClass = typeSelectorWithPseudoClass<`dir(${
  | "ltr"
  | "rtl"})`>;

type summarizesTypeSelectorWithPseudoClass =
  | directionalityDirPseudoClass
  | languageLangPseudoClass
  | hyperlinkAnyLinkPseudoClass
  | linkHistoryLinkPseudoClass
  | linkHistoryVisitedPseudoClass
  | localLinkPseudoClass
  | targetPseudoClass
  | targetContainerTargetWithinPseudoClass
  | referenceElementScopePseudoClass
  | currentPseudoClass
  | currentDeepestPseudoClass
  | pastPseudoClass
  | futurePseudoClass
  | activePseudoClass
  | hoverPseudoClass
  | focusPseudoClass
  | focuswithinPseudoClass
  | focusvisiblePseudoClass
  | enabledPseudoClass
  | disabledPseudoClass
  | readWritePseudoClass
  | readOnlyPseudoClass
  | placeholderShownPseudoClass
  | autofillPseudoClass
  | defaultPseudoClass
  | checkedPseudoClass
  | indeterminatePseudoClass
  | validPseudoClass
  | invalidPseudoClass
  | inRangePseudoClass
  | outOfRangePseudoClass
  | requiredPseudoClass
  | optionalPseudoClass
  | blankPseudoClass
  | userInvalidPseudoClass
  | rootPseudoClass
  | emptyPseudoClass
  | nthChildPseudoClass
  | nthLastChildPseudoClass
  | firstChildPseudoClass
  | lastChildPseudoClass
  | onlyChildPseudoClass
  | nthOfTypePseudoClass
  | nthLastOfTypePseudoClass
  | firstOfTypePseudoClass
  | lastOfTypePseudoClass
  | onlyOfTypePseudoClass
  | nthColPseudoClass
  | nthLastColPseudoClass;

type attribute = string;
type attributeValue = string;
type attributeSelector =
  | `[${attribute}]`
  | `[${attribute}="${attributeValue}"]`
  | `[${attribute}="${attributeValue}" i]`
  | `[${attribute}="${attributeValue}" s]`
  | `[${attribute}~="${attributeValue}"]`
  | `[${attribute}^="${attributeValue}"]`
  | `[${attribute}$="${attributeValue}"]`
  | `[${attribute}*="${attributeValue}"]`
  | `[${attribute}|="${attributeValue}"]`;

type attributePresenceAndValueSelector = `${typeSelector}${attributeSelector}`;
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

type pseudoElementName =
  | "first-line"
  | "first-letter"
  | "prefix"
  | "postfix"
  | "selection"
  | "target-text"
  | "spelling-error"
  | "grammar-error"
  | "before"
  | "after"
  | "marker"
  | "placeholder"
  | "file-selector-button";
type pseudoElements = `::${pseudoElementName}`;
type pseudoElementSelector = `${compoundSelector}${pseudoElements}`;

type Selector =
  | namespace<universalSelector>
  | namespace<typeSelector>
  | negationNotPseudoClass
  | matchesAnyIsPseudoClass
  | specificityAdjustmentWherePseudoClass
  | relationalHasPseudoClass
  | classSelector
  | idSelector
  | attributePresenceAndValueSelector
  | summarizesTypeSelectorWithPseudoClass
  | descendantCombinator
  | childCombinator
  | nextSiblingCombinator
  | subsequentSiblongCombinator
  | columnCombinator
  | pseudoElements
  | pseudoElementSelector;

export function selector(name: Selector, ...properties: string[]) {
  return `${name} {\n${properties
    .map((property) => `\t${property}`)
    .join("\n")}\n}`;
}
