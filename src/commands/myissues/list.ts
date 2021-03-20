import Command, { flags } from "../../base";
import { cli } from "cli-ux";
import chalk from "chalk";
import { assignedIssues } from "../../linear/assignedIssues";

export default class List extends Command {
  static aliases = ["myissues", "mi"];

  static description = "List issues assigned to you";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "file" }];

  listIssues = async () => {
    cli.action.start("Fetching your assigned issues...");
    const { user, linearClient } = this;
    const issues = await assignedIssues({ user, linearClient });

    cli.action.stop();

    if (issues.length > 0) {
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
            get: (row) =>
              `${chalk.hex(row.state.color)("○")} ${row.state.name}`,
          },
        },
        {
          printLine: this.log,
        }
      );
    } else {
      this.log("You currently don't have any issues assigned.");
    }
  };

  async run() {
    this.listIssues();
  }
}
