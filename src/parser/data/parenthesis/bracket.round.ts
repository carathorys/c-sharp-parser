import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('(', ')');

export {
  check as ValidateRoundBracket,
  guard as IsRoundBracket,
  type as RoundBracketType,
  values as RoundBrackets,
};
