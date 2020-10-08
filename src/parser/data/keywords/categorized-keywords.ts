import {
  AccessKeywords,
  AccessKeywordType,
  AccessModifiers,
  AccessModifierType,
  ContextualKeywords,
  ContextualKeywordType,
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
  LiteralKeywords,
  LiteralKeywordType,
  MethodParameterKeywords,
  MethodParameterKeywordType,
  ModifierKeywords,
  ModifierKeywordType,
  NamespaceKeywords,
  NamespaceKeywordType,
  OperatorKeywords,
  OperatorKeywordType,
  QueryKeywords,
  QueryKeywordType,
  StatementKeywords,
  StatementKeywordType,
  TypeKeywords,
  TypeKeywordType,
} from './categorized';

export type CategorizedKeyword =
  | typeof AccessKeywordType
  | typeof AccessModifierType
  | typeof ContextualKeywordType
  | typeof LiteralKeywordType
  | typeof MethodParameterKeywordType
  | typeof ModifierKeywordType
  | typeof NamespaceKeywordType
  | typeof OperatorKeywordType
  | typeof QueryKeywordType
  | typeof StatementKeywordType
  | typeof TypeKeywordType;

export const IsCategorizedKeyword = (s: any): s is CategorizedKeyword => {
  return (
    IsAccessKeyword(s) ||
    IsAccessModifier(s) ||
    IsContextualKeyword(s) ||
    IsLiteralKeyword(s) ||
    IsMethodParameterKeyword(s) ||
    IsModifierKeyword(s) ||
    IsNamespaceKeyword(s) ||
    IsOperatorKeyword(s) ||
    IsQueryKeyword(s) ||
    IsStatementKeyword(s) ||
    IsTypeKeyword(s)
  );
};

const CategorizedKeywords = [
  ...AccessKeywords,
  ...AccessModifiers,
  ...ContextualKeywords,
  ...LiteralKeywords,
  ...MethodParameterKeywords,
  ...ModifierKeywords,
  ...NamespaceKeywords,
  ...OperatorKeywords,
  ...QueryKeywords,
  ...StatementKeywords,
  ...TypeKeywords,
];
