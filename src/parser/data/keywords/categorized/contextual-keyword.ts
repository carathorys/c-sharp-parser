import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'add',
  'dynamic',
  'global',
  'set',
  'value',
  'var',
);

export {
  check as ValidateContextualKeyword,
  guard as IsContextualKeyword,
  type as ContextualKeywordType,
  values as ContextualKeywords,
};
