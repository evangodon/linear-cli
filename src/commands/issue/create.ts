import inquirer from 'inquirer';
import clipboardy from 'clipboardy';
import Command, { Flags } from '../../base';
import chalk from 'chalk';
import ora from 'ora';

type Response = {
  teamId: string;
  title: string;
  description: string;
};

/**
 */
export default class IssueCreate extends Command {
  static description = 'Create a new issue';

  static aliases = ['create', 'c'];

  static flags = {
    copy: Flags.boolean({
      char: 'c',
      description: 'Copy issue url to clipboard after creating',
    }),
  };

  async run() {
    const { flags } = await this.parse(IssueCreate);

    const teams = await this.linear.query.allTeams();

    const { teamId, title, description } = await inquirer.prompt<Response>([
      {
        name: 'teamId',
        message: 'For which team?',
        type: 'list',
        choices: teams.map((team) => ({ name: team.name, value: team.id })),
      },
      {
        name: 'title',
        message: 'Title',
        type: 'input',
      },
      {
        name: 'description',
        message: 'Description',
        type: 'editor',
      },
    ]);

    const spinner = ora('Creating issue').start();
    const response = await this.linear.issueCreate({ teamId, title, description });

    spinner.stop();

    if (!response) {
      this.error('Something went wrong, issue creation failed.');
    }

    const newIssue = await response.issue;

    if (!newIssue) {
      this.error('Something went wrong getting new issue');
    }

    this.log('');
    this.success(`Issue ${chalk.magenta(newIssue.identifier)} created: ${newIssue.url}`);

    if (flags.copy) {
      if (!newIssue.url) {
        this.error('Error getting issue url for clipboard');
      }
      clipboardy.writeSync(newIssue.url);
      this.log('Url copied to clipboard');
    }
  }
}
