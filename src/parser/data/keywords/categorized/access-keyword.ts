import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion('base', 'this');

export {
  check as ValidateAccessKeyword,
  guard as IsAccessKeyword,
  type as AccessKeywordType,
  values as AccessKeywords,
};
