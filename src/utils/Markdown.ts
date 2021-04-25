import marked from 'marked';
import TerminalRenderer from 'marked-terminal';
import terminalLink from 'terminal-link';
import wrapAnsi from 'wrap-ansi';

/**
 * Reads markdown and renders it for the terminal
 *
 * @TODO: Fix longs links
 * @TODO: fix child bullet points
 */

const MAX_WIDTH = 90;

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
      return terminalLink(title, href);
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
