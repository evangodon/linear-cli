import Command from "../../base";
import { createIssuesTable } from "../../utils/createIssuesTable";

export default class IssueList extends Command {
  static description = "List issues";

  listIssues = async () => {
    const issues = await this.linear.getIssues();

    if (issues.length === 0) {
      this.log("You currently don't have any issues assigned.");
    }

    createIssuesTable(issues, { log: this.log });
  };

  async run() {
    this.listIssues();
  }
}
