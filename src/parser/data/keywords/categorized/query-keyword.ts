import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'ascending',
  'by',
  'descending',
  'equals',
  'from',
  'group',
  'in',
  'into',
  'join',
  'let',
  'on',
  'orderby',
  'select',
  'where',
);

export {
  check as ValidateQueryKeyword,
  guard as IsQueryKeyword,
  type as QueryKeywordType,
  values as QueryKeywords,
};
