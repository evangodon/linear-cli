import chalk from 'chalk';
import { cli } from 'cli-ux';
import sw from 'string-width';
import { IssueFragment } from '../generated/_documents';
import { Status } from './Status';
import { Label } from './Label';
import { Priority } from './Priority';

type Options = {
  flags: any;
};

export type TableIssue = Pick<
  IssueFragment,
  'identifier' | 'title' | 'state' | 'assignee' | 'priority' | 'team' | 'labels'
>;

/**
 */
export const IssuesTable = (issues: TableIssue[], { flags }: Options) => {
  const { log } = global;
  let rowIndex = 0;

  /* Colorize header with custom logger since cli-ux doesn't support it. */
  function printTable(row: string) {
    if (!flags['no-header'] && rowIndex < 2) {
      const headerColor = chalk.magenta;
      log(headerColor(row));
      rowIndex++;
      return;
    }

    log(row);
    rowIndex++;
  }

  /* Filters */
  issues =
    flags.mine && flags.team
      ? issues.filter((issue) => issue.team.key === flags.team.toUpperCase())
      : issues;

  issues =
    flags.mine && flags.status
      ? issues.filter((issue) => issue.assignee?.id === global.user.id)
      : issues;

  issues = flags.uncompleted
    ? issues.filter(
        (issue) => issue.state.type !== 'completed' && issue.state.type !== 'canceled'
      )
    : issues;

  const MAX_TITLE_LENGTH = 80;
  issues = issues.map((issue) => ({
    ...issue,
    title:
      issue.title.length > MAX_TITLE_LENGTH
        ? `${issue.title.slice(0, MAX_TITLE_LENGTH)}...`
        : issue.title,
  }));

  /* Get longest string length for each column */
  const longestLengthOf = {
    identifier: 0,
    title: 0,
    state: 0,
    assignee: 0,
  };

  for (const issue of issues) {
    const { identifier, title, state, assignee } = longestLengthOf;
    longestLengthOf.identifier =
      identifier < issue.identifier.length ? issue.identifier.length : identifier;

    longestLengthOf.title = title < issue.title.length ? issue.title.length : title;

    longestLengthOf.state =
      state < issue.state.name.length ? issue.state.name.length : state;

    longestLengthOf.assignee =
      issue.assignee && assignee < issue.assignee.displayName.length
        ? issue.assignee.displayName.length
        : assignee;
  }

  const team =
    flags.all || (flags.mine && !flags.team) ? 'All' : String(flags.team).toUpperCase();

  if (issues.length === 0) {
    log('No issues to show');
    process.exit();
  }

  const optionsHeader = [
    `Team: ${team}`,
    flags.status && `Status: ${Status(issues[0].state)}`,
    !flags.status && `Sort: ${flags.sort}`,
    flags.uncompleted && 'Uncompleted issues',
  ].filter(Boolean);

  /* Custom sorting */
  if (flags.sort.includes('priority')) {
    issues = issues
      .sort((i1, i2) => i1.priority - i2.priority)
      .sort((_i1, i2) => (i2.priority === 0 ? -1 : 1));

    if (flags.sort.startsWith('-')) {
      issues = issues.reverse();
    }

    delete flags.sort;
  }

  try {
    log(chalk.dim(optionsHeader.join(' | ')));
    log('');
    cli.table(
      issues,
      {
        identifier: {
          header: 'ID',
          minWidth: longestLengthOf.identifier + 2,
          get: (issue) => issue.identifier,
        },
        state: {
          minWidth: longestLengthOf.state + 4,
          header: 'Status',
          get: (issue) => `${Status(issue.state)}`,
        },
        title: {
          header: 'Title',
          minWidth: longestLengthOf.title + 4,
          get: (issue) => issue.title,
        },
        assignee: {
          minWidth: Math.max(longestLengthOf.assignee + 4, 'assignee'.length + 4),
          header: 'Assignee',
          get: (issue) => issue.assignee?.displayName ?? chalk.dim('—'),
          extended: true,
        },
        priority: {
          header: 'Priority',
          minWidth: 12,
          get: (issue) => Priority(issue.priority),
          extended: true,
        },
        labels: {
          header: 'Labels',
          get: (issue) => issue.labels.nodes.map((label) => Label(label)).join(' '),
          extended: true,
        },
      },
      {
        printLine: printTable,
        ...flags,
      }
    );
  } catch (error) {
    log(`${chalk.red('Error')}: ${error.message}`);
  }
};
