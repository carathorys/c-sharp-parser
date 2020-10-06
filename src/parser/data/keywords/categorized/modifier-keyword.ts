import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'abstract',
  'async',
  'const',
  'event',
  'extern',
  'new',
  'override',
  'partial',
  'readonly',
  'sealed',
  'static',
  'unsafe',
  'virtual',
  'volatile',
);

export {
  check as ValidateModifierKeyword,
  guard as IsModifierKeyword,
  type as ModifierKeywordType,
  values as ModifierKeywords,
};
