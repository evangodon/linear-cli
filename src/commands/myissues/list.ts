import Command, { flags } from "../../base";
import { cli } from "cli-ux";
import { createIssuesTable } from "../../utils/createIssuesTable";

/**
 * List all issues  assigned to me
 */
export default class MyIssuesList extends Command {
  static aliases = ["myissues", "mi"];

  static description = "List issues assigned to you";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  listIssues = async () => {
    cli.action.start("Fetching your assigned issues...");
    const issues = await this.linear.getMyAssignedIssues();
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
