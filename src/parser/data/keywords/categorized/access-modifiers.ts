import { StringUnion } from '../../string-union';

const { check, guard, type, values } = StringUnion('public', 'private', 'internal', 'protected');

export {
  check as ValidateAccessModifier,
  guard as IsAccessModifier,
  type as AccessModifierType,
  values as AccessModifiers,
};
