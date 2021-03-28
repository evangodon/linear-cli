import Command from "../../base";
import { markdownRender } from "../../utils/markdownRender";

type Response = {
  title: string;
};

/**
 */
export default class IssueInfo extends Command {
  static description = "Show description of issue";

  static args = [
    {
      name: "issueId",
    },
  ];

  async showIssueInfo() {
    const { args } = this.parse(IssueInfo);

    const issue = await this.linear.getIssue(args.issueId);

    this.log("\n");
    this.log(markdownRender(`# ${issue.title}\n${issue.description ?? ""}`));
  }

  async run() {
    this.showIssueInfo();
  }
}
