import { cli } from 'cli-ux';
import Command from '../../base';
import inquirer from 'inquirer';
import { render } from '../../components';
import { IssueSearchQuery } from '../../generated/_documents';

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

type SearchedIssue = IssueSearchQuery['issueSearch']['nodes'][0];

/**
 * TODO: Debounce requests when searching
 */
export default class IssueSearch extends Command {
  static aliases = ['search', 's'];

  static description = 'describe the command here';

  static args = [{ name: 'query' }];

  async promptSearch() {
    const response = await inquirer.prompt<{
      issue: SearchedIssue;
    }>([
      {
        type: 'autocomplete',
        name: 'issue',
        message: 'Search issues',
        emptyText: 'No issues found',
        pageSize: 20,
        source: async (_: any, input: string) => {
          if (!input) {
            return [];
          }

          const issues = await this.linear.query.searchIssues(input, { noSpinner: true });
          return issues?.map((issue) => ({
            name: `${issue.identifier} - ${issue.title}`,
            value: issue,
          }));
        },
      },
    ]);

    const selectedIssue = await this.linear.query.issue(response.issue.id);

    render.IssueCard(selectedIssue);
  }

  async searchWithQuery(query: string) {
    const issues = await this.linear.query.searchIssues(query);

    if (issues.length === 0) {
      this.log('No issues found');
      return;
    }

    this.log('');
    cli.table(
      issues,
      {
        identifier: {
          get: (issue) => issue.identifier,
        },
        title: {
          header: 'Status',
          get: (issue) => issue.title,
        },
      },
      {
        printLine: this.log,
        'no-header': true,
      }
    );
  }

  async run() {
    const { args } = await this.parse<{}, { query: string }>(IssueSearch);

    if (args.query) {
      await this.searchWithQuery(args.query);
      return;
    }

    await this.promptSearch();
  }
}
