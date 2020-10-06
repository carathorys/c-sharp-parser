import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion('using', '.', '::', 'extern');

export {
  check as ValidateNamespaceKeyword,
  guard as IsNamespaceKeyword,
  type as NamespaceKeywordType,
  values as NamespaceKeywords,
};
