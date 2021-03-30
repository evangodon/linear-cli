import boxen from 'boxen';
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';
import { cli } from 'cli-ux';
import Command, { flags } from '../../base';
import { markdownRender } from '../../utils/markdownRender';
import { GetIssueQuery } from '../../generated/_documents';

type Issue = GetIssueQuery['issue'];

export default class IssueIndex extends Command {
  static description = 'Show issue info';

  static aliases = ['i', 'issue:show'];

  static args = [{ name: 'issueId', required: true }];

  static flags = {
    description: flags.boolean({ char: 'd', description: 'Show issue description' }),
    open: flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
  };

  renderIssueBox(issue: Issue) {
    const issueProperties: { label?: string; value: string }[] = [
      {
        value: chalk.magenta.bold(issue.identifier),
      },
      {
        value: wrapAnsi(issue.title, 60),
      },
      {
        value: '', // new line
      },
      {
        label: 'Team',
        value: issue.team.name,
      },
      {
        label: 'Status',
        value: issue.state.name,
      },
      {
        label: 'Priority',
        value: issue.priorityLabel,
      },
      {
        label: 'Assignee',
        value: issue.assignee?.name ?? 'Unassigned',
      },
      {
        label: 'Labels',
        value: issue.labels.nodes.map((label) => `${label.name}`).join(' - '),
      },
    ];

    const terminalString = issueProperties
      .map(
        (p) =>
          (p.label && p.value ? chalk.dim(`${p.label}:`.padEnd(12)) : '') +
          (p.value ? p.value : '')
      )
      .join('\n');

    this.log('');
    this.log(boxen(terminalString, { padding: 1, borderStyle: 'round' }));
  }

  renderIssueDescription(issue: Issue) {
    this.log('');
    this.log(markdownRender(`# ${issue.title}\n${issue.description ?? ''}`));
  }

  async run() {
    const { args, flags } = this.parse(IssueIndex);
    const issue = await this.linear.getIssue(args.issueId);

    if (flags.open) {
      cli.open(issue.url);
      return;
    }

    if (flags.description) {
      this.renderIssueDescription(issue);
      return;
    }

    this.renderIssueBox(issue);
  }
}
