import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion('params', 'ref', 'out');

export {
  check as ValidateMethodParameterKeyword,
  guard as IsMethodParameterKeyword,
  type as MethodParameterKeywordType,
  values as MethodParameterKeywords,
};
