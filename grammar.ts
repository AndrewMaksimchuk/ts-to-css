import {
  whitespace,
  comment,
  identToken,
  stringToken,
  functionToken,
} from "./token";

/** GRAMMAR START */
export namespace grammar {
  // Source: https://www.w3.org/TR/selectors-4/#grammar

  //https://www.w3.org/TR/css-values-4/#component-multipliers
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

  export type selectorList = complexSelectorList;
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
  type compoundSelector = string; // [TODO:fix] to correct type
  // type compoundSelector =
  // asterisk<grouping<pseudoElementSelector | `${pseudoElementSelector} ${asterisk<pseudoClassSelector>}`>>

  type simpleSelector = typeSelector | subclassSelector;
  type combinator = ">" | "+" | "~" | "||"; // [ '|' '|' ] - is grouping<'|'> but is not correct
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

  type declarationValue = string; // The <declaration-value> production matches any sequence of one or more tokens, so long as the sequence does not contain <bad-string-token>, <bad-url-token>, unmatched <)-token>, <]-token>, or <}-token>, or top-level <semicolon-token> tokens or <delim-token> tokens with a value of "!". It represents the entirety of what a valid declaration can have as its value.
  type anyValue = declarationValue; // The <any-value> production is identical to <declaration-value>, but also allows top-level <semicolon-token> tokens and <delim-token> tokens with a value of "!". It represents the entirety of what valid CSS can be in any context.
  type pseudoClassSelector = `:${identToken}` | `:${functionToken}${anyValue})`;
  type pseudoElementSelector = `:${pseudoClassSelector}`;
}
/** GRAMMAR END */
