import { StringUnion } from '../string-union';

const { check, guard, type, values } = StringUnion('//', '/*', '*/');

export {
  check as ValidateCommentDelimiter,
  guard as IsCommentDelimiter,
  type as CommentDelimiterType,
  values as CommentDelimiters,
};
