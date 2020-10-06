import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion("'");

export {
  check as ValidateCharDelimiter,
  guard as IsCharDelimiter,
  type as CharDelimiterType,
  values as CharDelimiters,
};
