import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion(')', '}', '>', ']', '*/', '"', "'", '\n');

export { check as ValidateCloseTag, guard as IsCloseTag, type as CloseTagType, values as CloseTags };
