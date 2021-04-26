import boxen from 'boxen';
import chalk from 'chalk';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import wrapAnsi from 'wrap-ansi';
import { Status } from './Status';
import { Priority } from './Priority';
import { Label } from './Label';

import type { GetIssueQuery } from '../generated/_documents';

dayjs.extend(relativeTime);

type Issue = GetIssueQuery['issue'];

export const IssueCard = (issue: Issue) => {
  const labelWidth = 12;

  const assignee =
    issue.assignee?.id === global.user.id
      ? `${issue.assignee.displayName} (You)`
      : issue.assignee?.displayName;

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
      value: Status(issue.state),
    },
    {
      label: 'Priority',
      value: Priority(issue.priority),
    },
    {
      label: 'Assignee',
      value: assignee ?? 'Unassigned',
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
            `${Label(label)}${(idx + 1) % 3 === 0 ? '\n'.padEnd(labelWidth) : ''}`
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

  global.log('');
  global.log(boxen(issueRender, { padding: 1, borderStyle: 'round' }));
};
