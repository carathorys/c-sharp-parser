import {
  CloseTag,
  CloseTags,
  OpenTags,
  IsCloseTag,
  IsOpenTag,
  OpenTag,
  Parenthesis,
} from '../data';

export const findClosingTag = (str: string, index: number, tag: OpenTag): Parenthesis => {
  let pos = index + 1;
  let closeTag = CloseTags[OpenTags.indexOf(tag)] as CloseTag;
  let children: Parenthesis[] = [];
  while (pos < str.length) {
    const char = str.charAt(pos);
    if (IsOpenTag(char)) {
      const tmp = findClosingTag(str, pos, char);
      children.push(tmp);
      if (tmp.end !== undefined) {
        pos = tmp.end;
        continue;
      } else {
        break;
      }
    } else if (IsCloseTag(char) && char === closeTag) {
      return {
        open: tag,
        close: char,
        begin: index,
        end: pos,
        segment: str.substring(index, pos),
        children: [],
      };
    }
    pos++;
  }
  return {
    open: tag,
    close: closeTag,
    begin: index,
    segment: str.substring(index, pos),
    children: children,
  };
};

// export const searchParenthesis = (str: string) => {};
// export const parse = (str: string) => {};
