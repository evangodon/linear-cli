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
    list: (body: string, ordered: boolean) => {
      body = body.replace(/\s+/g, ' ');
      body = body.replace(/\*/g, `\n•`);

      if (ordered) {
        body = body
          .split('\n•')
          .slice(1)
          .map((item, index) => `${index + 1}.${item}\n`)
          .join('')
          .replace(/•/g, '\n\t•');
      } else {
        body = body.replace(/•/g, '\n•');
      }

      return wrapAnsi(body.replace(/\*/g, '•'), MAX_WIDTH, { trim: false });
    },
  }),
  mangle: false,
  smartLists: true,
});

export { marked as markdownRender };
