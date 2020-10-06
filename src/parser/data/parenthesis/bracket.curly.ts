import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('{', '}');

export {
  check as ValidateCurlyBracket,
  guard as IsCurlyBracket,
  type as CurlyBracketType,
  values as CurlyBrackets,
};
