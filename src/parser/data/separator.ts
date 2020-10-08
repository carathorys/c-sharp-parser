import { CloseTags, OpenTags } from './parenthesis';
import { OpenTag, CloseTag } from './parenthesis.types';
import { StringUnion } from './string-union';

const { check, guard, type, values } = StringUnion(', ', ' ', '\t', ',', '\n');

type SeparatorChar = typeof type | OpenTag | CloseTag;

type CodeSegmentSeparator = { separator: SeparatorChar; pos: number };

const separatorChars = [...values, ...OpenTags, ...CloseTags];

export {
  check as ValidateSeparatorChar,
  guard as IsSeparatorChar,
  SeparatorChar,
  CodeSegmentSeparator,
  separatorChars as SeparatorChars,
};
