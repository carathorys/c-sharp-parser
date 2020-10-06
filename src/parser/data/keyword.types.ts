/**
 * Source: https://www.tutorialsteacher.com/csharp/csharp-keywords
 */

/**
 * @description Access modifiers are applied to the declaration of the class, method, properties, fields, and other members. They define the accessibility of the class and its members.
 */
export type AccessModifier = 'public' | 'private' | 'internal' | 'protected';

/**
 * @description Modifier keywords are specific keywords that indicate who can modify types and type members. Modifiers allow or prevent certain parts of programs from being modified by other parts.
 */
export type ModifierKeyword =
  | 'abstract'
  | 'async'
  | 'const'
  | 'event'
  | 'extern'
  | 'new'
  | 'override'
  | 'partial'
  | 'readonly'
  | 'sealed'
  | 'static'
  | 'unsafe'
  | 'virtual'
  | 'volatile';

/**
 * @description Statement keywords are related to program flow.
 */
export type StatementKeyword =
  | 'if'
  | 'else'
  | 'switch'
  | 'case'
  | 'do'
  | 'for'
  | 'foreach'
  | 'in'
  | 'while'
  | 'break'
  | 'continue'
  | 'default'
  | 'goto'
  | 'return'
  | 'yield'
  | 'throw'
  | 'try'
  | 'catch'
  | 'finally'
  | 'checked'
  | 'unchecked'
  | 'fixed'
  | 'lock';

/**
 * @description These keywords are applied to the parameters of a method.
 */
export type MethodParameterKeyword = 'params' | 'ref' | 'out';

/**
 * @description These keywords are applied with namespace and related operators.
 */
export type NamespaceKeyword = 'using' | '.' | '::' | 'extern';

/**
 * @description Operator keywords perform miscellaneous actions.
 */
export type OperatorKeyword =
  | 'as'
  | 'await'
  | 'is'
  | 'new'
  | 'sizeof'
  | 'typeof'
  | 'stackalloc'
  | 'checked'
  | 'unchecked';

/**
 * @description Access keywords are used to access the containing class or the base class of an object or class.
 */
export type AccessKeyword = 'base' | 'this';

/**
 * @description Literal keywords apply to the current instance or value of an object.
 */
export type LiteralKeyword = 'null' | 'false' | 'true' | 'value' | 'void';

/**
 * @description Type keywords are used for data types.
 */
export type TypeKeyword =
  | 'bool'
  | 'byte'
  | 'char'
  | 'class'
  | 'decimal'
  | 'double'
  | 'enum'
  | 'float'
  | 'int'
  | 'long'
  | 'sbyte'
  | 'short'
  | 'string'
  | 'struct'
  | 'uint'
  | 'ulong'
  | 'ushort';

/**
 * @description Contextual keywords are considered as keywords, only if used in specific contexts. They are not reserved and so can be used as names or identifiers.
 */
export type ContextualKeyword = 'add' | 'var' | 'dynamic' | 'global' | 'set' | 'value';

/**
 * @description Query keywords are contextual keywords used in LINQ queries.
 */
export type QueryKeyword =
  | ' from'  | ' where'
  | ' select'
  | ' group'
  | ' into'
  | ' orderby'
  | ' join'
  | ' let'
  | ' in'
  | ' on'
  | ' equals'
  | ' by'
  | ' ascending'
  | ' descending';

export type CategorizedKeyword =
  | AccessModifier
  | ModifierKeyword
  | StatementKeyword
  | MethodParameterKeyword
  | NamespaceKeyword
  | OperatorKeyword
  | AccessKeyword
  | LiteralKeyword
  | TypeKeyword
  | ContextualKeyword
  | QueryKeyword;

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

  export const IsTypeKeyword = (s: string) : s is TypeKeyword => {
    return !!(s as TypeKeyword)
  }

  export const IsContextualKeyword = (s: string): s is ContextualKeyword => {
    return !!(s as ContextualKeyword)
  }

  export const IsQueryKeyword = (s: string): s is QueryKeyword => {
    return !!(s as QueryKeyword);
  };
    
export type AllKeywords =
  | 'abstract'
  | 'add'
  | 'alias'
  | 'as'
  | 'ascending'
  | 'async'
  | 'await'
  | 'base'
  | 'bool'
  | 'break'
  | 'by'
  | 'byte'
  | 'case'
  | 'catch'
  | 'char'
  | 'checked'
  | 'class'
  | 'const'
  | 'continue'
  | 'decimal'
  | 'default'
  | 'delegate'
  | 'descending'
  | 'do'
  | 'double'
  | 'dynamic'
  | 'else'
  | 'enum'
  | 'equals'
  | 'event'
  | 'explicit'
  | 'extern'
  | 'false'
  | 'finally'
  | 'fixed'
  | 'float'
  | 'for'
  | 'foreach'
  | 'from'
  | 'get'
  | 'global'
  | 'goto'
  | 'group'
  | 'if'
  | 'implicit'
  | 'in'
  | 'int'
  | 'interface'
  | 'internal'
  | 'into'
  | 'is'
  | 'join'
  | 'let'
  | 'lock'
  | 'long'
  | 'nameof'
  | 'namespace'
  | 'new'
  | 'notnull'
  | 'null'
  | 'object'
  | 'on'
  | 'operator'
  | 'orderby'
  | 'out'
  | 'override'
  | 'params'
  | 'partial'
  | 'private'
  | 'protected'
  | 'public'
  | 'readonly'
  | 'ref'
  | 'remove'
  | 'return'
  | 'sbyte'
  | 'sealed'
  | 'select'
  | 'set'
  | 'short'
  | 'sizeof'
  | 'stackalloc'
  | 'static'
  | 'string'
  | 'struct'
  | 'switch'
  | 'this'
  | 'throw'
  | 'true'
  | 'try'
  | 'typeof'
  | 'uint'
  | 'ulong'
  | 'unchecked'
  | 'unmanaged'
  | 'unsafe'
  | 'ushort'
  | 'using'
  | 'value'
  | 'var'
  | 'virtual'
  | 'void'
  | 'volatile'
  | 'when'
  | 'while'
  | 'yield';
