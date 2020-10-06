import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('[', ']');

export {
  check as ValidateSquareBracket,
  guard as IsSquareBracket,
  type as SquareBracketType,
  values as SquareBrackets,
};
