// https://www.w3.org/TR/css-syntax-3/#parser-diagrams

import {
  identToken,
  atKeywordToken,
  whitespaceToken,
  preservedToken,
  functionToken,
} from "./token";

export type stylesheet = ``; // TODO

export type ruleList = ``; // TODO

export type atRule =
  | `${atKeywordToken};`
  | `${atKeywordToken}${simpleBlock}`
  | `${atKeywordToken}${componentValue}${simpleBlock}`
  | `${atKeywordToken}${componentValue};`;

export type qualifiedRule =
  | `${simpleBlock}`
  | `${componentValue}${simpleBlock}`;

export type important = `!${whitespaceToken}important${whitespaceToken}`;

export type declaration =
  | `${identToken}${whitespaceToken}:`
  | `${identToken}${whitespaceToken}:${important}`
  | `${identToken}${whitespaceToken}:${componentValue}`
  | `${identToken}${whitespaceToken}:${componentValue}${important}`;

export type blockBracesCurly = `{}` | `{${componentValue}}`;

export type blockBracesRound = `()` | `(${componentValue})`;

export type blockBracesSquare = `[]` | `[${componentValue}]`;

export type simpleBlock =
  | blockBracesCurly
  | blockBracesRound
  | blockBracesSquare;

export type functionBlock =
  | `${functionToken})`
  | `${functionToken}${componentValue})`;

export type componentValue = preservedToken | simpleBlock | functionBlock;

export type DeclarationRuleList = declaration;
export type declarationList = declaration;
export type atRuleList = unknown;
export type qualifiedRuleList = unknown;