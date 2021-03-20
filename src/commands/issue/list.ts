import Command, { flags } from "../../base";
import { cli } from "cli-ux";
import { createIssuesTable } from "../../utils/createIssuesTable";
import { Linear } from "../../linear/Linear";

export default class IssueList extends Command {
  static description = "List issues";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "file" }];

  listIssues = async () => {
    cli.action.start("Fetching your assigned issues...");
    const linear = new Linear();
    const issues = await linear.getIssues();
    cli.action.stop();

    if (issues.length === 0) {
      this.log("You currently don't have any issues assigned.");
    }

    createIssuesTable(issues, { log: this.log });
  };

  async run() {
    this.listIssues();
  }
}
