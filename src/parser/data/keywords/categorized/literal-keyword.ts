import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion('null', 'false', 'true', 'value', 'void');

export {
  check as ValidateLiteralKeyword,
  guard as IsLiteralKeyword,
  type as LiteralKeywordType,
  values as LiteralKeywords,
};
