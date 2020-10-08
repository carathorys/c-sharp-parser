import {
  AccessKeyword,
  AccessModifier,
  CategorizedKeyword,
  ContextualKeyword,
  KnownKeyword,
  LiteralKeyword,
  MethodParameterKeyword,
  ModifierKeyword,
  NamespaceKeyword,
  OperatorKeyword,
  QueryKeyword,
  StatementKeyword,
  TypeKeyword,
  IsAccessKeyword,
  IsAccessModifier,
  IsCategorizedKeyword,
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
} from '../data/keywords';
import { IsSeparatorChar, SeparatorChar } from '../data/separator';
import { IsAngleBracket, IsCloseTag, IsOpenTag } from '../data';

export class Word {
  public previousWord?: Word;
  public nextWord?: Word;
  isKeyword: boolean;
  isGenericReference: boolean;
  isTypeKeyword: boolean;
  isOnlySeparator: boolean;
  isSingleSpace: boolean;
  isSeparatorSkippable_: boolean | undefined = undefined;

  constructor(
    public readonly begin: number,
    public readonly end: number,
    public readonly word: KnownKeyword | string,
    public readonly separator: SeparatorChar
  ) {
    this.isOnlySeparator = word.length == 0;
    this.isSingleSpace = this.isOnlySeparator && separator === ' ';
    this.isKeyword = IsKnownKeyword(word);
    this.isGenericReference = IsAngleBracket(separator);
    this.isTypeKeyword = IsTypeKeyword(word);
  }

  get isSkippable(): boolean {
    return this.isSingleSpace && (this.previousWord?.isOnlySeparator ?? false);
  }

  get isSeparatorSkippable(): boolean {
    if (this.isSeparatorSkippable_ === undefined)
      this.isSeparatorSkippable_ =
        (this.isSingleSpace &&
          (this.previousWord?.separator?.endsWith(' ') === true || !IsCloseTag(this.previousWord.separator))) ||
        (this.separator === ' ' && this.nextWord.isOnlySeparator);
    return this.isSeparatorSkippable_;
  }

  public toString(): string {
    // if (this.isSkippable) return '';
    return `${this.word}${this.isSeparatorSkippable ? '' : this.separator}`;
  }
}
