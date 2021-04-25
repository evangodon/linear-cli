import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import boxen, { Options } from 'boxen';
import { cli } from 'cli-ux';
import Command, { flags } from '../../base';
import { GetIssueQuery } from '../../generated/_documents';
import { render } from '../../utils';
import chalk from 'chalk';

dayjs.extend(relativeTime);

type Issue = GetIssueQuery['issue'];

const boxenOptions: Options = { padding: 1, borderStyle: 'round' };

export default class IssueIndex extends Command {
  static description = 'Show issue info';

  static aliases = ['i'];

  static args = [
    { name: 'issueId', required: true },
    {
      name: 'issueIdOptional',
      hidden: true,
      description: 'Use this if you to split the issue id into two arguments',
    },
  ];

  static examples = ['$ lr issue LIN-14', '$ lr issue LIN 14'];

  static flags = {
    description: flags.boolean({ char: 'd', description: 'Show issue description' }),
    comments: flags.boolean({ char: 'c', description: 'Show issue comments' }),
    open: flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
  };

  getIssueId() {
    const { args } = this.parse<{}, { issueId: string; issueIdOptional?: string }>(
      IssueIndex
    );

    if (args.issueIdOptional) {
      return `${args.issueId}-${args.issueIdOptional}`;
    }

    return args.issueId;
  }

  renderIssueComments(issue: Issue) {
    if (issue.comments?.nodes.length === 0) {
      this.log(`Issue ${issue.identifier} does not have any comments`);
    }

    const dim = chalk.dim;

    for (const comment of issue.comments!.nodes.reverse()) {
      const author = comment.user.displayName;
      const markdown = render
        .Markdown(`${comment.body}`)
        .replace(/\n\n$/, '')
        .padEnd(author.length + 6);

      const authorLabel = ` ${comment.user.displayName} `;
      let commentBox = boxen(markdown, boxenOptions);

      const lengthOfBox = commentBox.match(/╭.*╮/)![0].length;

      commentBox = commentBox.replace(
        /╭.*╮/,
        `╭─${authorLabel.padEnd(lengthOfBox - 4, '─')}─╮`
      );

      const createdAt = dim(dayjs(comment.createdAt).fromNow());

      this.log('');
      this.log(`${commentBox}\n  ${createdAt}`);
    }
  }

  renderIssueDescription(issue: Issue) {
    const markdown = `${issue.identifier}\n # ${issue.title}\n${issue.description ?? ''}`;
    this.log('');
    this.log(boxen(render.Markdown(markdown), boxenOptions));
  }

  async run() {
    const { flags } = this.parse(IssueIndex);
    const issueId = this.getIssueId();
    const issue = await this.linear.getIssue(issueId, { withComments: flags.comments });

    if (flags.open) {
      cli.open(issue.url);
      return;
    }

    if (flags.comments) {
      this.renderIssueComments(issue);
      return;
    }

    if (flags.description) {
      this.renderIssueDescription(issue);
      return;
    }

    render.IssueCard(issue);
  }
}
