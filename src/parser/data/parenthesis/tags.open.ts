import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('(', '{', '<', '[', '/*', '"', "'", '//');

export { check as ValidateOpenTag, guard as IsOpenTag, type as OpenTagType, values as OpenTags };
