import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('<', '>');

export {
  check as ValidateAngleBracket,
  guard as IsAngleBracket,
  type as AngleBracketType,
  values as AngleBrackets,
};
