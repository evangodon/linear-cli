import chalk from 'chalk';
import { cli, Table } from 'cli-ux';
import sw from 'string-width';
import { IssueFragment } from '../generated/_documents';
import { Status } from './Status';

type Options = {
  log: (msg: string) => void;
  flags?: Table.table.Options;
};

type Issue = Pick<IssueFragment, 'identifier' | 'title' | 'state'>;

export const IssuesTable = (issues: Issue[], { log, flags }: Options) => {
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

  try {
    cli.table(
      issues,
      {
        identifier: {
          header: 'ID',
          minWidth: 8,
          get: (issue) => issue.identifier,
        },
        title: {
          header: 'Title',
          minWidth: 70,
          get: (issue) => issue.title,
        },
        state: {
          header: 'Status',
          get: (issue) => `${Status(issue.state)}`,
        },
      },
      {
        printLine: printTable,
        sort: 'ID',
        ...flags,
      }
    );
  } catch (error) {
    log(`${chalk.red('Error')}: ${error.message}`);
  }
};
