import Command, { flags } from "@oclif/command";
import { getCurrentViewer } from "../linear";

export default class Issue extends Command {
  static description = "List issues";

  static flags = {
    help: flags.help({ char: "h" }),
    list: flags.boolean({ char: "l", description: "List issues" }),
  };

  static args = [{ name: "file" }];

  listIssues = async () => {
    const currentViewer = await getCurrentViewer();

    const issues = await currentViewer.assignedIssues();
    const nodes = issues?.nodes ?? [];

    if (nodes.length > 0) {
      this.log("Your assigned issues: \n");
      nodes.map((issue) => {
        this.log(`${issue.identifier} ${issue.title}`);
      });
    }

    this.log("You currently don't have any issues assigned.");
  };

  async run() {
    const { args, flags } = this.parse(Issue);

    if (flags.list) {
      this.listIssues();
    }
  }
}
