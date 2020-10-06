import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion(
  'bool',
  'byte',
  'char',
  'class',
  'decimal',
  'double',
  'enum',
  'float',
  'int',
  'long',
  'sbyte',
  'short',
  'string',
  'struct',
  'uint',
  'ulong',
  'ushort',
);

export {
  check as ValidateTypeKeyword,
  guard as IsTypeKeyword,
  type as TypeKeywordType,
  values as TypeKeywords,
};
