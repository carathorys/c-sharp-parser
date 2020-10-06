import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('"', '@"', '$"', '@$"', '$@"');

export {
  check as ValidateStringDelimiter,
  guard as IsStringDelimiter,
  type as StringDelimiterType,
  values as StringDelimiters,
};
