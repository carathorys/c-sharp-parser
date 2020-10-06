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
      const tmp = findClosingTag(str.substring(pos + 1), pos, char);
      children.push(tmp);
      if (tmp.end !== undefined) {
        pos = tmp.end;
        continue;
      } else {
        break;
      }
    } else if (IsCloseTag(char) && char === closeTag) {
      pos++;
      return {
        open: tag,
        close: char,
        begin: index + 1,
        raw: str,
        end: pos - 1,
        segment: str.substring(index + 1, pos - 1),
        children: children,
      };
    }
    pos++;
  }
  return {
    open: tag,
    close: closeTag,
    begin: index,
    raw: str,
    segment: str.substring(index, pos),
    children: children,
  };
};

// export const searchParenthesis = (str: string, start: number, stop: number): Parenthesis | null => {
//   const firstSpace = str.indexOf(' ');
//   const foundTags = OpenTags.filter((x) => {
//     const firstIndexOf = str.indexOf(x, start);
//     return firstIndexOf >= 0 && firstIndexOf < firstSpace;
//   });

//   if (foundTags.length <= 0) {
//     return null;
//   }
//   let parenthesis: Parenthesis | null = null;
//   foundTags.forEach((tag) => {
//     const pOpen = str.indexOf(tag);
//     if (pOpen > stop) return;
//     const tmp = findClosingTag(str, pOpen, tag);
//     if (!parenthesis || parenthesis.begin > tmp.begin) {
//       parenthesis = tmp;
//     }
//   });
//   return parenthesis;
// };

const findFirstSeparator = (str: string) => {};

export const parse = (str: string) => {
  let output = '';
  let p = 0;
  while (str.length > p) {
    let separator = ' ';
    let pos = str.indexOf(separator);
    let current = str.substring(0, pos);
  }
};
