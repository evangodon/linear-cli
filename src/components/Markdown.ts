/// <reference path="../index.d.ts"/>

import marked from 'marked';
import TerminalRenderer from 'marked-terminal';
import terminalLink from 'terminal-link';
import wrapAnsi from 'wrap-ansi';

/**
 * Reads markdown and renders it for the terminal
 */

const MAX_WIDTH = 90;

let imageCounter = 1;

marked.setOptions({
  renderer: new TerminalRenderer({
    reflowText: true,
    width: MAX_WIDTH,
    link: (href: string) => {
      /* Remove email links */
      if (href.match(/@/)) {
        return href.split(' ')[0];
      }
      return href;
    },
    image: (href: string, title: string) => {
      const linkId = imageCounter++;
      const mediaType = href.match(/[.png|.jpg]$/) ? 'IMAGE' : 'MEDIA';
      /* Print at the end */
      setTimeout(() => {
        global.log(`\n[${linkId}] ${terminalLink(title, href)}`);
      }, 0);

      return `[${mediaType}][${linkId}] ${title}`;
    },
  }),
  mangle: false,
  smartLists: true,
});

export const Markdown = (markdown: string) => {
  markdown = marked(markdown).replace(/\*/g, () => `•`);
  markdown = wrapAnsi(markdown, 90);

  return markdown;
};
