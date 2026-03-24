import { grammar } from "./grammar";
import { identToken } from "./token";
import { DeclarationRuleList } from "./parser";
import { dashedIdent } from "./values"; "./values";

type PageMarginRules = 
  | "@top-left-corner"
  | "@top-left"
  | "@top-center"
  | "@top-right"
  | "@top-right-corner"
  | "@bottom-left-corner"
  | "@bottom-left"
  | "@bottom-center"
  | "@bottom-right"
  | "@bottom-right-corner"
  | "@left-top"
  | "@left-middle"
  | "@left-bottom"
  | "@right-top"
  | "@right-middle"
  | "@right-bottom";

export type AtRuleName =
  | "@charset"
  | "@container"
  | "@counter-style"
  | "@font-face"
  | "@font-palette-values"
  | "@import"
  | "@keyframes"
  | "@layer"
  | "@media"
  | "@namespace"
  | "@property"
  | "@scope"
  | "@starting-style"
  | "@supports"
  | "@position-try"
  | "@view-transition"
  | "@font-feature-values"
  | "@page"
  | PageMarginRules;

export function charset(charset: string) {
  return `@charset "${charset}";\n`;
}

export function namespaces(url: string, prefix?: string) {
  if (prefix) {
    return `@namespace ${prefix} url(${url});\n`;
  }

  return `@namespace url(${url});\n`;
}

type PseudoPage = `:${ "left" | "right" | "first" | "blank" }`
type PageSelector = grammar.asterisk<PseudoPage> | `${grammar.questionMark<identToken>}${grammar.asterisk<PseudoPage>}`
type PageSelectorList = grammar.hashMark<PageSelector>
export type Page = `@page ${grammar.questionMark<PageSelectorList>} { ${DeclarationRuleList} }` | `@page { ${DeclarationRuleList} }`

/**
 * First argument should be on of: :left | :right | :first | :blank | "" or string
 * 
 * Special case: \@page:left, \@page:right, \@page:first, \@page:blank  
 * If need use selector as above, first argument should write with \@page: at the start
 * 
 * This rule can only contain page properties https://drafts.csswg.org/css-page-3/#page-property 
 * and margin at-rules https://drafts.csswg.org/css-page-3/#margin-at-rule
 * 
 * The margin at-rules can only contain page-margin properties https://drafts.csswg.org/css-page-3/#page-margin-property
 * 
 * Specification: https://drafts.csswg.org/css-page-3/#syntax-page-selector
 */
export function page(pageSelectorList: ":left" | ":right" | ":first" | ":blank" | "", declarationRuleList: string): string;
export function page(pageSelectorList: string, declarationRuleList: string): string;
export function page(pageSelectorList: ":left" | ":right" | ":first" | ":blank" | "" | string, declarationRuleList: string) {
  if (!pageSelectorList) {
    return `@page {\n\t${declarationRuleList}\n}`;
  }

  if (pageSelectorList.startsWith("@page")) {
    return `${pageSelectorList} {\n\t${declarationRuleList}\n}`;
  }

  return `@page ${pageSelectorList} {\n\t${declarationRuleList}\n}`;
}

// Margin rules related to @page at-rule
export function pageMarginRule(rule: PageMarginRules) {
  return (declarationList: string) => `${rule} {\n\t${declarationList}\n}`;
}

// https://drafts.csswg.org/css-conditional-5/#container-rule
type ContainerCondition = string; // simplify complex condition

/**
 * @container (width > 400px) {
 *  h2 { font-size: 1.5em; }
 *}
 * 
 *@container tall (height > 30rem) {
 *  p { line-height: 1.6; }
 *}
 *
 *@container sidebar {
 *  h2 { background: blue; }
 *}
 *
 *@container scroll-state(scrollable: top) {
 *  .back-to-top-link { visibility: visible; }
 *}
 *
 *@container sticky-heading scroll-state(stuck: top) {
 *  h2 { background: purple; color: white; }
 *}
 *
 *@container (width > 400px) and style(--responsive: true) {
 *  h2 { font-size: 1.5em; }
 *}
 *
 *@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
 *  h2 { font-size: 1.5em; }
 *}
 */
export function container(containerCondition: ContainerCondition, blockContents: string) {
  return `@container ${containerCondition} {\n\t${blockContents}\n}`;
}

export function counterStyle(counterStyleName: string, declarationList: string) {
  return `@counter-style ${counterStyleName} {\n\t${declarationList}\n}`;
}

export function fontFace(declarationList: string) {
  return `@font-face {\n\t${declarationList}\n}`;
}

export function fontPaletteValues(dashedIdent: dashedIdent, declarationList: string) {
  return `@font-palette-values ${dashedIdent} {\n\t${declarationList}\n}`;
}

export function importAtRule(pathAndCondition: string) {
  return `@import ${pathAndCondition}`;
}

export function keyframes(keyframesName: string, qualifiedRuleList: string) {
  return `@keyframes ${keyframesName} {\n\t${qualifiedRuleList}\n}`;
}

type layerName = string; // <layer-name> = <ident> [ '.' <ident> ]*
export function layerBlock(ruleList: string, layerName?: layerName) {
  if(layerName) {
    return `@layer ${layerName} {\n\t${ruleList}\n}`;
  }

    return `@layer {\n\t${ruleList}\n}`;
}

export function layerStatement(layerName: layerName) {
    return `@layer ${layerName};`;
}

type layerReturnFunctionIs<T> = T extends true ? typeof layerBlock : typeof layerStatement;
export function layer<T extends boolean>(isLayerBlock: T): layerReturnFunctionIs<T> {
  return isLayerBlock ? layerBlock : layerStatement;
}

type mediaQueryList = string; // simplify https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list
export function media(mediaQueryList: mediaQueryList, ruleList: string) {
  if (mediaQueryList) {
    return `@media ${mediaQueryList} {\n\t${ruleList}\n}`;
  }
  return `@media {\n\t${ruleList}\n}`;
}

type customPropertyName = `--${string}`;
export function property(customPropertyName: customPropertyName, declarationList: string) {
  return `@property ${customPropertyName} {\n\t${declarationList}\n}`;
}

type scopeBoundaries = string; // <scope-boundaries> =  [ ( <scope-start> ) ]? [ to ( <scope-end> ) ]?
export function scope(scopeBoundaries: scopeBoundaries, blockContents: string) {
  return `@scope ${scopeBoundaries} {\n\t${blockContents}\n}`;
}

export function startingStyle(ruleList: string) {
  return `@starting-style {\n\t${ruleList}\n}`;
}

type supportsCondition = string;
export function support(supportsCondition: supportsCondition, ruleList: string) {
  return `@supports ${supportsCondition} {\n\t${ruleList}\n}`;
}

export function fontFeatureValues(familyName: string, declarationRuleList: string) {
  return `@supports ${familyName} {\n\t${declarationRuleList}\n}`;
}

/**
* The rule only accepts the following properties:  
* - inset properties  
* - margin properties  
* - sizing properties  
* - self-alignment properties  
* - position-anchor  
* - position-area  
*/
export function positionTry(dashedIdent: dashedIdent, declarationList: string) {
  return `@supports ${dashedIdent} {\n\t${declarationList}\n}`;
}

export function viewTransition(declarationList: string) {
  return `@supports {\n\t${declarationList}\n}`;
}

export function atrule(rule: "@charset"): typeof charset;
export function atrule(rule: "@container"): typeof container;
export function atrule(rule: "@namespace"): typeof namespaces;
export function atrule(rule: "@counter-style"): typeof counterStyle;
export function atrule(rule: "@font-face"): typeof fontFace;
export function atrule(rule: "@font-palette-values"): typeof fontPaletteValues;
export function atrule(rule: "@import"): typeof importAtRule;
export function atrule(rule: "@keyframes"): typeof keyframes;
export function atrule(rule: "@layer"): typeof layer;
export function atrule(rule: "@media"): typeof media;
export function atrule(rule: "@property"): typeof property;
export function atrule(rule: "@scope"): typeof scope;
export function atrule(rule: "@starting-style"): typeof startingStyle;
export function atrule(rule: "@supports"): typeof support;
export function atrule(rule: "@font-feature-values"): typeof fontFeatureValues;
export function atrule(rule: "@position-try"): typeof positionTry;
export function atrule(rule: "@view-transition"): typeof viewTransition;
export function atrule(rule: "@page"): typeof page;
export function atrule(rule: PageMarginRules): (declarationList: string) => string;
export function atrule(rule: AtRuleName) {
  switch (rule) {
    case "@charset": {
      return charset;
    }

    case "@container": {
      return container;
    }

    case "@counter-style": {
      return counterStyle;
    }

    case "@font-face": {
      return fontFace;
    }

    case "@font-palette-values": {
      return fontPaletteValues;
    }

    case "@import": {
      return importAtRule;
    }

    case "@keyframes": {
      return keyframes;
    }

    case "@layer": {
      return layer;
    }

    case "@media": {
      return media;
    }

    case "@namespace": {
      return namespaces;
    }

    case "@property": {
      return property;
    }

    case "@scope": {
      return scope;
    }

    case "@starting-style": {
      return startingStyle;
    }

    case "@supports": {
      return support;
    }

    case "@font-feature-values": {
      return fontFeatureValues;
    }

    case "@position-try": {
      return positionTry;
    }

    case "@view-transition": {
      return viewTransition;
    }

    case "@page": {
      return page;
    }

    case "@bottom-center": {
      return pageMarginRule("@bottom-center");
    }

    case "@bottom-left": {
      return pageMarginRule("@bottom-left");
    }

    case "@bottom-left-corner": {
      return pageMarginRule("@bottom-left-corner");
    }

    case "@bottom-right": {
      return pageMarginRule("@bottom-right");
    }

    case "@bottom-right-corner": {
      return pageMarginRule("@bottom-right-corner");
    }

    case "@left-bottom": {
      return pageMarginRule("@left-bottom");
    }

    case "@left-middle": {
      return pageMarginRule("@left-middle");
    }

    case "@left-top": {
      return pageMarginRule("@left-top");
    }

    case "@right-bottom": {
      return pageMarginRule("@right-bottom");
    }

    case "@right-middle": {
      return pageMarginRule("@right-middle");
    }

    case "@right-top": {
      return pageMarginRule("@right-top");
    }

    case "@top-center": {
      return pageMarginRule("@top-center");
    }

    case "@top-left": {
      return pageMarginRule("@top-left");
    }

    case "@top-left-corner": {
      return pageMarginRule("@top-left-corner");
    }

    case "@top-right": {
      return pageMarginRule("@top-right");
    }

    case "@top-right-corner": {
      return pageMarginRule("@top-right-corner");
    }

    default:
      /* tslint:disable-next-line */
      const typeCheckForHandleAllAtRules: never = rule;
      throw new Error("At rule not exist");
  }
}
