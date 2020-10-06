import {
  CategorizedKeyword,
  AccessModifier,
  ModifierKeyword,
  StatementKeyword,
  MethodParameterKeyword,
  NamespaceKeyword,
  OperatorKeyword,
  AccessKeyword,
  LiteralKeyword,
  TypeKeyword,
  ContextualKeyword,
  QueryKeyword,
  KnownKeywords,
} from './keyword.types';

export const IsKnownKeyword = (s: string): s is KnownKeywords => {
  return !!(s as KnownKeywords)
};

export const IsCategorizedKeyword = (s: string): s is CategorizedKeyword => {
  return !!(s as CategorizedKeyword);
};

export const IsAccessModifier = (s: string): s is AccessModifier => {
  return !!(s as AccessModifier);
};

export const IsModifierKeyword = (s: string): s is ModifierKeyword => {
  return !!(s as ModifierKeyword);
};

export const IsStatementKeyword = (s: string): s is StatementKeyword => {
  return !!(s as StatementKeyword);
};

export const IsMethodParameterKeyword = (s: string): s is MethodParameterKeyword => {
  return !!(s as MethodParameterKeyword);
};

export const IsNamespaceKeyword = (s: string): s is NamespaceKeyword => {
  return !!(s as NamespaceKeyword);
};

export const IsOperatorKeyword = (s: string): s is OperatorKeyword => {
  return !!(s as OperatorKeyword);
};

export const IsCAccessKeyword = (s: string): s is AccessKeyword => {
  return !!(s as AccessKeyword);
};

export const IsLiteralKeyword = (s: string): s is LiteralKeyword => {
  return !!(s as LiteralKeyword);
};

export const IsTypeKeyword = (s: string): s is TypeKeyword => {
  return !!(s as TypeKeyword);
};

export const IsContextualKeyword = (s: string): s is ContextualKeyword => {
  return !!(s as ContextualKeyword);
};

export const IsQueryKeyword = (s: string): s is QueryKeyword => {
  return !!(s as QueryKeyword);
};
