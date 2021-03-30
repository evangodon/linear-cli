import Command from '../../base';
import { markdownRender } from '../../utils/markdownRender';

type Response = {
  title: string;
};

/**
 */
export default class IssueShow extends Command {
  static description = 'Show description of issue';

  static args = [
    {
      name: 'issueId',
      required: true,
    },
  ];

  async showIssueInfo() {
    const { args } = this.parse(IssueShow);

    const issue = await this.linear.getIssue(args.issueId);

    this.log('\n');
    this.log(markdownRender(`# ${issue.title}\n${issue.description ?? ''}`));
  }

  async run() {
    this.showIssueInfo();
  }
}
