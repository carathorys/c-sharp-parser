import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'as',
  'await',
  'checked',
  'is',
  'new',
  'sizeof',
  'stackalloc',
  'typeof',
  'unchecked',
);

export {
  check as ValidateOperatorKeyword,
  guard as IsOperatorKeyword,
  type as OperatorKeywordType,
  values as OperatorKeywords,
};
