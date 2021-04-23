import boxen from 'boxen';
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';
import { cli } from 'cli-ux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Command, { flags } from '../../base';
import { render } from '../../utils';
import { GetIssueQuery } from '../../generated/_documents';
import { render as r } from '../../utils';

dayjs.extend(relativeTime);

type Issue = GetIssueQuery['issue'];

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
    open: flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
  };

  renderIssueBox(issue: Issue) {
    const labelWidth = 12;

    const issueProperties: { label?: string; value: string }[] = [
      {
        value: chalk.magenta.bold(issue.identifier),
      },
      {
        value: wrapAnsi(issue.title, 60) + '\n',
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
        value: render.Priority(issue.priority),
      },
      {
        label: 'Assignee',
        value: issue.assignee ? issue.assignee.displayName : 'Unassigned',
      },
      {
        label: 'Project',
        value: issue.project ? issue.project.name : '',
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

    const dim = chalk.dim;
    const reset = chalk.reset;

    const creator = issue.creator?.displayName;
    const createdAt = dayjs(issue.createdAt).fromNow();

    let updatedBy;
    let updatedAt;
    const hasBeenUpdated = issue.history.nodes[0];

    if (hasBeenUpdated) {
      updatedBy = issue.history.nodes[0].actor?.displayName;
      updatedAt = dayjs(issue.history.nodes[0].createdAt).fromNow();
    }

    const displayCreator = creator ? ` by ${reset(creator)}` : '';
    const displayUpdateAuthor = updatedBy ? ` by ${reset(updatedBy)}` : '';

    const issueRender = issueProperties
      .map(
        (p) =>
          (p.label && p.value ? dim(`${p.label}:`.padEnd(labelWidth)) : '') +
          (p.value ? p.value : '')
      )
      .filter(Boolean)
      .join('\n')
      .concat(dim('\n\n---\n'))
      .concat(dim(`\n${'Created:'.padEnd(labelWidth)}${createdAt}${displayCreator}`))
      .concat(
        hasBeenUpdated
          ? dim(`\n${'Updated:'.padEnd(labelWidth)}${updatedAt}${displayUpdateAuthor}`)
          : ''
      )
      .concat(
        issue.archivedAt
          ? dim(`\n${'Archived:'.padEnd(labelWidth)}${dayjs(issue.archivedAt).fromNow()}`)
          : ''
      );

    this.log('');
    this.log(boxen(issueRender, { padding: 1, borderStyle: 'round' }));
  }

  renderIssueDescription(issue: Issue) {
    const markdown = `${issue.identifier}\n # ${issue.title}\n${issue.description ?? ''}`;
    this.log('');
    this.log(boxen(render.Markdown(markdown), { padding: 1, borderStyle: 'round' }));
  }

  getIssueId() {
    const { args } = this.parse<{}, { issueId: string; issueIdOptional?: string }>(
      IssueIndex
    );

    if (args.issueIdOptional) {
      return `${args.issueId}-${args.issueIdOptional}`;
    }

    return args.issueId;
  }

  async run() {
    const { flags } = this.parse(IssueIndex);
    const issueId = this.getIssueId();
    const issue = await this.linear.getIssue(issueId);

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
