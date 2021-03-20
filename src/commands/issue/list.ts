import Command, { flags } from "../../base";
import { cli } from "cli-ux";
import { getIssues } from "../../linear/issues";
import { createIssuesTable } from "../../utils/createIssuesTable";

export default class IssueList extends Command {
  static description = "List issues";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "file" }];

  listIssues = async () => {
    cli.action.start("Fetching your assigned issues...");
    const { linearClient, log } = this;
    const issues = await getIssues(linearClient);

    cli.action.stop();

    if (issues.length === 0) {
      this.log("You currently don't have any issues assigned.");
    }

    createIssuesTable(issues, { log });
  };

  async run() {
    this.listIssues();
  }
}
