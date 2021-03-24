import marked from "marked";
import TerminalRenderer from "marked-terminal";
import terminalLink from "terminal-link";

/**
 * Reads markdown and renders it for the terminal
 *
 * @TODO: Fix longs links
 */

marked.setOptions({
  renderer: new TerminalRenderer({
    reflowText: true,
    width: 110,
    image: (href: string, title: string) => {
      return terminalLink(title, href);
    },
  }),
});

export { marked as markdownRender };
