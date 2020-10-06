import { CloseTag, CloseTags, OpenTags, IsCloseTag, IsOpenTag, OpenTag } from '../data';

class Parenthesis {
  private segment: string;
  constructor(
    source: string,
    public readonly begin: number,
    public readonly open: OpenTag,
    public readonly close: CloseTag,
    public readonly end?: number,
    public readonly children?: Parenthesis[],
  ) {
    this.segment = source.substring(begin, end);
  }

  get Rendered(): string {
    return `${this.open}${this.segment}${this.close}`;
  }
}

export class Parser {
  private readonly parenthesises: Parenthesis[] = [];
  private readonly knownSeparators = [', ', ' ', ',', '\n'] as const;

  constructor(private readonly str: string) {
    this.searchParenthesis();
  }

  private searchSeparator(): { separator: string; pos: number } {
    let separator = ' ';
    let pos = -1;

    this.knownSeparators.forEach((s) => {
      const firstIndex = this.str.indexOf(s);
      if (firstIndex >= 0 && (firstIndex < pos || pos === -1)) {
        separator = s;
        pos = firstIndex;
      }
    });
    return { separator, pos };
  }

  private addParenthesis(p: Parenthesis) {
    if (this.parenthesises.filter((x) => x.begin === p.begin).length <= 0) {
      this.parenthesises.push(p);
    }
  }

  private findClosingTag(index: number, tag: OpenTag): number | undefined {
    let pos = index + 1;
    let closeTag = CloseTags[OpenTags.indexOf(tag)] as CloseTag;
    let children: Parenthesis[] = [];
    while (pos < this.str.length) {
      const char = this.str.charAt(pos);
      if (IsOpenTag(char)) {
        const tmp = this.findClosingTag(pos, char);

        if (!!tmp) {
          pos = tmp;
          continue;
        } else {
          break;
        }
      } else if (IsCloseTag(char) && char === closeTag) {
        pos++;
        let current = new Parenthesis(this.str, index + 1, tag, char, pos - 1, children);
        this.addParenthesis(current);
        return pos;
      }
      pos++;
    }
    this.addParenthesis(new Parenthesis(this.str, index, tag, closeTag, undefined, children));
    return undefined;
  }

  private searchParenthesis(): void {
    OpenTags.forEach((tag) => {
      let lastIndexOfFoundTag = this.str.indexOf(tag);

      while (lastIndexOfFoundTag > 0) {
        this.findClosingTag(lastIndexOfFoundTag, tag);
        lastIndexOfFoundTag = this.str.indexOf(tag, lastIndexOfFoundTag + 1);
      }
    });
  }
}

export const parse = (str: string) => {
  const p = new Parser(str);
  console.log(JSON.stringify(p));
};
