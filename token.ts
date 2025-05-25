/* Tokenization */
// https://www.w3.org/TR/css-syntax-3/#tokenization

type oneToSixTimes<T extends string | number> =
  | `${T}`
  | `${T}${T}`
  | `${T}${T}${T}`
  | `${T}${T}${T}${T}`
  | `${T}${T}${T}${T}${T}`
  | `${T}${T}${T}${T}${T}${T}`;

type repeatManyTimes<T extends string | number> = // Use for limit infinity posible code points, when code point repeat unknown times
  `${T}` | `${T}${T}` | `${T}${T}${T}` | `${T}${T}${T}${T}`;

export type comment = `/*${string}*/`;
export type newline = "\n" | "\r\n" | "\r" | "\f";
export type space = " ";
export type whitespace = space | "\t" | newline;

type latinCapitalLetter = "A" | "B" | "C" | "D" | "E" | "F";
type latinSmallLetter = Lowercase<latinCapitalLetter>;
type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type hexDigit = digit | latinCapitalLetter | latinSmallLetter;

export type escape =
  | `\\${string}`
  | `\\${oneToSixTimes<hexDigit>}`
  | `\\${oneToSixTimes<hexDigit>}${whitespace}`;
export type whitespaceToken = repeatManyTimes<whitespace>; // To infinity
export type ws = repeatManyTimes<whitespaceToken> | "";

type lowercaseLetter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
type uppercaseLetter = Uppercase<lowercaseLetter>;
type letter = lowercaseLetter | uppercaseLetter;
type nonASCIICodePoint = string; // A code point with a value equal to or greater than U+0080 <control>.
type identStartCodePoints =
  | "--"
  | `${letter | "_" | nonASCIICodePoint}`
  | escape
  | `-${string}`
  | `-${escape}`;
type identCodePoints =
  | ""
  | `${letter | "_" | "-" | digit | nonASCIICodePoint}`
  | escape;
export type identToken = `${identStartCodePoints}${identCodePoints}`;

export type functionToken = `${identToken}(`;
export type atKeywordToken = `@${identToken}`;
export type hashToken<T extends hexDigit> = `#${T}`;
export type stringToken = "";
export type urlToken = "";
export type delimToken = string; //  <delim-token> has a value composed of a single code point. A code point is a Unicode code point and is represented as "U+" followed by four-to-six ASCII upper hex digits, in the range U+0000 to U+10FFFF, inclusive.
export type numberToken = number;
export type dimensionToken = `${numberToken}${identToken}`;
export type percentageToken = `${numberToken}%`;
export type CDOToken = "<!--";
export type CDCToken = "-->";

export type EOFToken = unknown; // A conceptual token representing the end of the list of tokens. Whenever the list of tokens is empty, the next input token is always an <EOF-token>
export type badStringToken = unknown;
export type badUrlToken = unknown;
export type colonToken = ":";
export type semicolonToken = ";";
export type commaToken = ",";
export type leftSquareBracketToken = "[";
export type rightSquareBracketToken = "]";
export type leftParenthesisToken = "(";
export type rightParenthesisToken = ")";
export type leftCurlyBracketToken = "{";
export type rightCurlyBracketToken = "}";
