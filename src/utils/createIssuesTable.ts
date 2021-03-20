import { Issue } from "@linear/sdk";
import chalk from "chalk";
import { cli } from "cli-ux";

type Options = {
  log: (msg: string) => void;
};

export const createIssuesTable = (issues: Issue[], { log }: Options) => {
  cli.table(
    issues,
    {
      identifier: {
        header: "ID",
        minWidth: 10,
      },
      title: {},
      state: {
        header: "Status",
        get: (row) => `${chalk.hex(row.state.color)("○")} ${row.state.name}`,
      },
    },
    {
      printLine: log,
    }
  );
};
