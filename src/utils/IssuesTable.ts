import { OutputFlags } from '@oclif/parser/lib';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import sw from 'string-width';
import { IssueFragment } from '../generated/_documents';
import { Status } from './Status';
import IssuesList from '../commands/issue/list';

type Options = {
  flags: OutputFlags<typeof IssuesList.flags>;
};

export type TableIssue = Pick<
  IssueFragment,
  'identifier' | 'title' | 'state' | 'assignee' | 'project' | 'team'
>;

/**
 * @TODO: Place divider character between columns
 */
export const IssuesTable = (issues: TableIssue[], { flags }: Options) => {
  const { log } = global;

  if (issues.length === 0) {
    log("You currently don't have any issues assigned.");
    process.exit();
  }

  /* Colorize header with custom logger since cli-ux doesn't support it. */
  function printTable(row: string) {
    const ANSI_BOLD = '\x1B[1m';

    if (row.startsWith(ANSI_BOLD)) {
      const headerColor = chalk.magenta;
      log(headerColor(row));
      log(headerColor('─'.padEnd(sw(row), '─')));
      return;
    }
    log(row);
  }

  issues =
    flags.mine && flags.team
      ? issues.filter((issue) => issue.team.key === flags.team.toUpperCase())
      : issues;

  const longestLengthOf = {
    identifier: 0,
    title: 0,
    state: 0,
    assignee: 0,
  };

  /* Get longest string length for each column */
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

  try {
    global.log(
      chalk.dim(
        `Team: ${team} | Sort: ${flags.sort} ${
          flags.filter ? `| Filter: ${flags.filter}` : ''
        }\n`
      )
    );
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
          minWidth: longestLengthOf.assignee + 4,
          header: 'Assignee',
          get: (issue) => issue.assignee?.displayName ?? chalk.dim('—'),
          extended: true,
        },
        project: {
          header: 'Project',
          get: (issue) => (issue.project ? issue.project.name : ''),
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
