import boxen from 'boxen';
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';
import { cli } from 'cli-ux';
import Command, { flags } from '../../base';
import { render } from '../../utils';
import { GetIssueQuery } from '../../generated/_documents';
import { render as r } from '../../utils';

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
    const labelWidth = 12;

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
        value: render.Status(issue.state),
      },
      {
        label: 'Priority',
        value: issue.priorityLabel,
      },
      {
        label: 'Assignee',
        value: issue.assignee ? `${issue.assignee.displayName}` : 'Unassigned',
      },
      {
        label: 'Labels',
        value: issue.labels.nodes
          .map(
            (label, idx) =>
              `${r.Label(label)}${(idx + 1) % 3 === 0 ? '\n'.padEnd(labelWidth) : ''}`
          )
          .join(' '),
      },
    ];

    const terminalString = issueProperties
      .map(
        (p) =>
          (p.label && p.value ? chalk.dim(`${p.label}:`.padEnd(labelWidth)) : '') +
          (p.value ? p.value : '')
      )
      .join('\n');

    this.log('');
    this.log(boxen(terminalString, { padding: 1, borderStyle: 'round' }));
  }

  renderIssueDescription(issue: Issue) {
    const markdown = `${issue.identifier}\n # ${issue.title}\n${issue.description ?? ''}`;
    this.log('');
    this.log(boxen(render.Markdown(markdown), { padding: 1, borderStyle: 'round' }));
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
