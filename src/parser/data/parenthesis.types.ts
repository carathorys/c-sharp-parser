import {
  AngleBracketType,
  CharDelimiterType,
  CloseTagType,
  CommentDelimiterType,
  CurlyBracketType,
  IsAngleBracket,
  IsCharDelimiter,
  IsCloseTag,
  IsCommentDelimiter,
  IsCurlyBracket,
  IsOpenTag,
  IsRoundBracket,
  IsSquareBracket,
  IsStringDelimiter,
  OpenTagType,
  RoundBracketType,
  SquareBracketType,
  StringDelimiterType,
} from './parenthesis';

export type OpenTag = typeof OpenTagType;
export type CloseTag = typeof CloseTagType;

export type Tag = OpenTag | CloseTag;
const IsTag = (s: any): s is Tag => IsOpenTag(s) || IsCloseTag(s);

export type AngleBracket = typeof AngleBracketType;
export type CurlyBracket = typeof CurlyBracketType;
export type RoundBracket = typeof RoundBracketType;
export type SquareBracket = typeof SquareBracketType;

export type CharDelimiter = typeof CharDelimiterType;
export type CommentDelimiter = typeof CommentDelimiterType;
export type StringDelimiter = typeof StringDelimiterType;

export interface Parenthesis {
  open: OpenTag;
  close: CloseTag;
  begin: number;
  end?: number;
  children?: Parenthesis[];
  segment: string;
}

export {
  IsAngleBracket,
  IsCharDelimiter,
  IsCloseTag,
  IsCommentDelimiter,
  IsCurlyBracket,
  IsOpenTag,
  IsRoundBracket,
  IsSquareBracket,
  IsStringDelimiter,
  IsTag
};
