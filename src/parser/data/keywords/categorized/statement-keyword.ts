import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'break',
  'case',
  'catch',
  'checked',
  'continue',
  'default',
  'do',
  'else',
  'finally',
  'fixed',
  'for',
  'foreach',
  'goto',
  'if',
  'in',
  'lock',
  'return',
  'switch',
  'throw',
  'try',
  'unchecked',
  'while',
  'yield',
);

export {
  check as ValidateStatementKeyword,
  guard as IsStatementKeyword,
  type as StatementKeywordType,
  values as StatementKeywords,
};
