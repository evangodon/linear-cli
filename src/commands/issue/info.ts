import Command from "../../base";
import { Linear } from "../../linear/Linear";
import { markdownRender } from "../../utils/markdownRender";

type Response = {
  title: string;
};

/**
 */
export default class IssueInfo extends Command {
  static args = [
    {
      name: "issueId",
    },
  ];

  async showIssueInfo() {
    const { args } = this.parse(IssueInfo);
    const linear = new Linear();
    const issue = await linear.getIssue(args.issueId);

    this.log("\n");
    this.log(markdownRender(`# ${issue.title}\n${issue.description ?? ""}`));
  }

  async run() {
    this.showIssueInfo();
  }
}
