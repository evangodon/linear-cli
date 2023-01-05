import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import boxen, { Options } from 'boxen';
import { cli } from 'cli-ux';
import chalk from 'chalk';
import Command, { Flags } from '../../base';
import { GetIssueQuery } from '../../generated/_documents';
import { render } from '../../components';
import { issueArgs, getIssueId, IssueArgs } from '../../utils/issueId';

dayjs.extend(relativeTime);

type Issue = GetIssueQuery['issue'];

const boxenOptions: Options = { padding: 1, borderStyle: 'round' };

export default class IssueIndex extends Command {
  static description = 'Show issue info';

  static aliases = ['i'];

  static args = issueArgs;

  static examples = [
    '$ lr issue LIN-14',
    '$ lr issue LIN 14',
    '$ lr issue 14 (looks in default team)',
  ];

  static flags = {
    description: Flags.boolean({ char: 'd', description: 'Show issue description' }),
    comments: Flags.boolean({ char: 'c', description: 'Show issue comments' }),
    open: Flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
    branch: Flags.boolean({ char: 'b', description: 'Show branch name' }),
  };

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

  returnIssueBranch(issue: Issue) {
    const branchName = issue.branchName;
    this.log(branchName);
  }

  async run() {
    const { flags, args } = await this.parse(IssueIndex);

    const issueId = getIssueId(args);
    const issue = await this.linear.query.issue(issueId, {
      withComments: flags.comments,
    });

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

    if (flags.branch) {
      this.returnIssueBranch(issue);
      return;
    }

    render.IssueCard(issue);
  }
}
