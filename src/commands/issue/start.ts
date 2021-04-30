import * as clipboardy from 'clipboardy';
import chalk from 'chalk';
import inquirer from 'inquirer';
import Command, { flags } from '../../base';
import { issueArgs, getIssueId, IssueArgs } from '../../utils/issueId';
import { GetFlagsType } from '../../base';

export default class IssueStart extends Command {
  static description = 'Change status of issue to "In progress" and assign to yourself.';

  static aliases = ['start', 's'];

  static args = issueArgs;

  static flags = {
    'copy-branch': flags.boolean({
      char: 'c',
      description: 'copy git branch to clip-board',
    }),
  };

  async run() {
    const { args, flags } = this.parse<GetFlagsType<typeof IssueStart>, IssueArgs>(
      IssueStart
    );

    const issueId = getIssueId(args);

    const currentIssue = await this.linear.getIssue(issueId);

    if (currentIssue.assignee && currentIssue.assignee.id !== this.user.id) {
      const { confirmAssign } = await inquirer.prompt<{ confirmAssign: boolean }>([
        {
          name: 'confirmAssign',
          message: `Issue ${currentIssue.identifier} is assigned to ${currentIssue.assignee.displayName}, do you want to assign to yourself?`,
          type: 'confirm',
        },
      ]);

      if (!confirmAssign) {
        return;
      }
    }

    const nextState = currentIssue.team.states.nodes
      .filter((state) => state.type === 'started')
      .sort((s1, s2) => (s1.position > s2.position ? 1 : -1))[0];

    await this.linear.issueUpdate(currentIssue.identifier, {
      stateId: nextState.id,
      assigneeId: this.user.id,
    });

    this.log('');
    this.success(
      `The state of issue ${chalk.magenta(currentIssue.identifier)} is now in the '${
        nextState.name
      }' state and is assigned to you.`
    );

    if (flags['copy-branch']) {
      const gitBranch = `${currentIssue.identifier}/${currentIssue.title.replace(
        /\s/g,
        '-'
      )}`.toLowerCase();
      clipboardy.writeSync(gitBranch);
      this.log(`${chalk.blue(gitBranch)} branch copied to clipboard`);
    }
  }
}
