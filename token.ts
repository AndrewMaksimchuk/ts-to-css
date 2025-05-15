// https://www.w3.org/TR/css-syntax-3/#tokenization

/* Tokenization */

export type comment = `/*${string}*/`;
export type newline = "\n" | "\r\n" | "\r" | "\f";
export type space = " ";
export type whitespace = space | "\t" | newline;

type latinCapitalLetter = "A" | "B" | "C" | "D" | "E" | "F";
type latinSmallLetter = Lowercase<latinCapitalLetter>;
type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type hexDigit = digit | latinCapitalLetter | latinSmallLetter;

export type escape = `\\`;
export type whitespaceToken = "";
export type ws = "";
export type identToken = "";
export type functionToken = "";
export type atKeywordToken = "";
export type hashToken<T extends hexDigit> = `#${T}`;
export type stringToken = "";
export type urlToken = "";
export type numberToken = "";
export type dimensionToken = `${numberToken}${identToken}`;
export type percentageToken = `${numberToken}%`;
export type CDOToken = "<!--";
export type CDCToken = "-->";
