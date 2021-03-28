import chalk from 'chalk';
import { cli } from 'cli-ux';
import { IssueFragment } from '../generated/_documents';

type Options = {
  log: (msg: string) => void;
};

type Issue = Pick<IssueFragment, 'identifier' | 'title' | 'state'>;

export const createIssuesTable = (issues: Issue[], { log }: Options) => {
  cli.table(
    issues,
    {
      identifier: {
        header: 'ID',
        minWidth: 10,
        get: (issue) => issue.identifier,
      },
      title: {
        get: (issue) => issue.title,
      },
      state: {
        header: 'Status',
        get: (issue) => `${chalk.hex(issue.state.color)('○')} ${issue.state.name}`,
      },
    },
    {
      printLine: log,
      sort: 'ID',
    }
  );
};
