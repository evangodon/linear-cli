import boxen from 'boxen';
import { cli } from 'cli-ux';
import Command, { flags } from '../../base';
import { GetIssueQuery } from '../../generated/_documents';
import { render } from '../../utils';

type Issue = GetIssueQuery['issue'];

export default class IssueIndex extends Command {
  static description = 'Show issue info';

  static aliases = ['i'];

  static args = [
    { name: 'issueId', required: true },
    {
      name: 'issueIdOptional',
      hidden: true,
      description: 'Use this if you to split the issue id into two arguments',
    },
  ];

  static examples = ['$ lr issue LIN-14', '$ lr issue LIN 14'];

  static flags = {
    description: flags.boolean({ char: 'd', description: 'Show issue description' }),
    open: flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
  };

  renderIssueDescription(issue: Issue) {
    const markdown = `${issue.identifier}\n # ${issue.title}\n${issue.description ?? ''}`;
    this.log('');
    this.log(boxen(render.Markdown(markdown), { padding: 1, borderStyle: 'round' }));
  }

  getIssueId() {
    const { args } = this.parse<{}, { issueId: string; issueIdOptional?: string }>(
      IssueIndex
    );

    if (args.issueIdOptional) {
      return `${args.issueId}-${args.issueIdOptional}`;
    }

    return args.issueId;
  }

  async run() {
    const { flags } = this.parse(IssueIndex);
    const issueId = this.getIssueId();
    const issue = await this.linear.getIssue(issueId);

    if (flags.open) {
      cli.open(issue.url);
      return;
    }

    if (flags.description) {
      this.renderIssueDescription(issue);
      return;
    }

    render.IssueCard(issue);
  }
}
