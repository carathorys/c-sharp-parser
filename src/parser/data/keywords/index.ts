import {
  IsAccessKeyword,
  IsAccessModifier,
  IsContextualKeyword,
  IsLiteralKeyword,
  IsMethodParameterKeyword,
  IsModifierKeyword,
  IsNamespaceKeyword,
  IsOperatorKeyword,
  IsQueryKeyword,
  IsStatementKeyword,
  IsTypeKeyword,
  AccessKeywords,
  AccessModifiers,
  ContextualKeywords,
  LiteralKeywords,
  MethodParameterKeywords,
  ModifierKeywords,
  NamespaceKeywords,
  OperatorKeywords,
  QueryKeywords,
  StatementKeywords,
  TypeKeywords,
  ValidateAccessKeyword,
  ValidateAccessModifier,
  ValidateContextualKeyword,
  ValidateLiteralKeyword,
  ValidateMethodParameterKeyword,
  ValidateModifierKeyword,
  ValidateNamespaceKeyword,
  ValidateOperatorKeyword,
  ValidateQueryKeyword,
  ValidateStatementKeyword,
  ValidateTypeKeyword,
  AccessKeywordType,
  AccessModifierType,
  ContextualKeywordType,
  LiteralKeywordType,
  MethodParameterKeywordType,
  ModifierKeywordType,
  NamespaceKeywordType,
  OperatorKeywordType,
  QueryKeywordType,
  StatementKeywordType,
  TypeKeywordType,
} from './categorized';

import {
  IsKnownKeyword,
  KnownKeywords,
  KnownKeywordType,
  ValidateKnownKeyword,
} from './all-known-keyword';

export * from './categorized-keywords';
export {
  AccessKeywords,
  AccessModifiers,
  ContextualKeywords,
  KnownKeywords,
  LiteralKeywords,
  MethodParameterKeywords,
  ModifierKeywords,
  NamespaceKeywords,
  OperatorKeywords,
  QueryKeywords,
  StatementKeywords,
  TypeKeywords,
  IsAccessKeyword,
  IsAccessModifier,
  IsContextualKeyword,
  IsKnownKeyword,
  IsLiteralKeyword,
  IsMethodParameterKeyword,
  IsModifierKeyword,
  IsNamespaceKeyword,
  IsOperatorKeyword,
  IsQueryKeyword,
  IsStatementKeyword,
  IsTypeKeyword,
  ValidateAccessKeyword,
  ValidateAccessModifier,
  ValidateContextualKeyword,
  ValidateKnownKeyword,
  ValidateLiteralKeyword,
  ValidateMethodParameterKeyword,
  ValidateModifierKeyword,
  ValidateNamespaceKeyword,
  ValidateOperatorKeyword,
  ValidateQueryKeyword,
  ValidateStatementKeyword,
  ValidateTypeKeyword,
};

export type AccessKeyword = typeof AccessKeywordType;
export type AccessModifier = typeof AccessModifierType;
export type ContextualKeyword = typeof ContextualKeywordType;
export type KnownKeyword = typeof KnownKeywordType;
export type LiteralKeyword = typeof LiteralKeywordType;
export type MethodParameterKeyword = typeof MethodParameterKeywordType;
export type ModifierKeyword = typeof ModifierKeywordType;
export type NamespaceKeyword = typeof NamespaceKeywordType;
export type OperatorKeyword = typeof OperatorKeywordType;
export type QueryKeyword = typeof QueryKeywordType;
export type StatementKeyword = typeof StatementKeywordType;
export type TypeKeyword = typeof TypeKeywordType;
