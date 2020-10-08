import { CloseTag, CloseTags, OpenTags, IsCloseTag, IsOpenTag, OpenTag, IsAngleBracket, IsRoundBracket } from '../data';
import { Word } from './word';
import { CodeSegmentSeparator, IsSeparatorChar, SeparatorChar, SeparatorChars } from '../data/separator';

export class Parser {
  private readonly str: string = '';
  private words: Word[] = [];

  constructor(str: string) {
    this.str = str.replace(/\s+/g, ' ').trim();
  }

  parseFn(str: string, expectedEnd: string, begin?: number, end?: number): Word[] {
    let lastPos = begin ?? 0;
    let stop = end ?? str.length;
    let parsedData: Word[] = [];
    let lastWord: Word | null = null;
    while (lastPos < stop) {
      let { separator, pos } = getFirstSeparator(str, lastPos, stop) ?? {
        separator: '\n',
        pos: end,
      };
      let currentWord = new Word(lastPos, pos, str.substring(lastPos, pos), separator);
      if (lastWord != null) {
        lastWord.nextWord = currentWord;
        currentWord.previousWord = lastWord;
      }
      if (IsOpenTag(separator)) {
        let children = this.parseFn(str, CloseTags[OpenTags.indexOf(separator)], Math.min(str.length, pos + 1));
        children[0].previousWord = currentWord;
        currentWord.nextWord = children[0];
        pos = children[children.length - 1].end;
        parsedData = [...parsedData, currentWord, ...children];
        lastWord = parsedData[parsedData.length - 1];
        lastPos = pos + separator.length;
      } else if (IsCloseTag(separator)) {
        if (separator !== expectedEnd) {
          console.error(`Unexpected closing tag: '${separator}' at ${pos};  "${expectedEnd}" was expected`);
          return parsedData;
        }
        parsedData.push(currentWord);
        return parsedData;
      } else {
        lastWord = currentWord;
        lastPos = pos + separator.length;
        parsedData.push(currentWord);
      }
    }

    return parsedData;
  }

  public startParse() {
    this.words = [...this.parseFn(this.str, '')];
  }

  public toString(): string {
    return this.words.map((x) => `${x}`).join('');
  }
}

export const getFirstSeparator = (str: string, begin: number, end: number): CodeSegmentSeparator | null => {
  let separator: SeparatorChar;
  let pos = -1;

  SeparatorChars.forEach((s) => {
    const firstIndex = str.indexOf(s, begin);
    if (end > firstIndex && firstIndex > 0 && (firstIndex < pos || pos === -1)) {
      separator = s;
      pos = firstIndex;
    }
  });
  return pos > 0 ? { separator, pos } : null;
};

function stringify(obj, replacer, spaces, cycleReplacer = null) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

function serializer(replacer, cycleReplacer) {
  var stack = [],
    keys = [];

  if (cycleReplacer == null)
    cycleReplacer = function (key, value) {
      if (key === 'previousWord' || key === 'nextWord') return '[Circular ~]';
      if (stack[0] === value) return '[Circular ~]';
      return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
    };

  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
    } else stack.push(value);

    return replacer == null ? value : replacer.call(this, key, value);
  };
}
export const parse = (str: string) => {
  const p = new Parser(str);
  p.startParse();
  console.log(p.toString());
  console.log(stringify(p, null, 2));
  // p.parseString();
};
