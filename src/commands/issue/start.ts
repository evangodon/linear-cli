import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import Command, { flags } from '../../base';

/**
 * @TODO: improve display of  spinner
 * @TODO: Fix the stop-others flag
 */
export default class IssueStart extends Command {
  static description = 'Change status of issue to "In progress" and assign to yourself.';

  static aliases = ['start', 's'];

  static args = [{ name: 'issueId', required: true }];

  static flags = {
    'stop-others': flags.boolean({
      char: 's',
      description: 'Stop all other issues assigned to you',
      hidden: true,
    }),
  };

  async run() {
    const { args, flags } = this.parse(IssueStart);

    const currentIssue = await this.linear.getIssue(args.issueId);

    if (currentIssue.state.type === 'started') {
      this.log('');
      this.log(`Issue ${chalk.magenta(currentIssue.identifier)} is already in progress.`);

      return;
    }

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
    this.log(
      `The state of issue ${chalk.magenta(currentIssue.identifier)} is now '${
        nextState.name
      }' and is assigned to you.`
    );

    /*
    if (flags['stop-others']) {
      this.log('');
      this.log('Stopping your other issues...');
      const spinner = ora().start();
      const issues = await this.linear.getMyAssignedIssues({ disableSpinner: true });

      const requests = issues
        .filter((issue) => issue.state.type === 'started' && issue.id !== currentIssue.id)
        .map((issue) => {
          const stoppedState = issue.team.states.nodes
            .filter((state) => state.type === 'unstarted')
            .sort((s1, s2) => (s1.position > s2.position ? -1 : 1))[0];

          return this.linear.issueUpdate(issue.id, { stateId: stoppedState.id });
        });

      await Promise.all(requests);
      spinner.stop();

      this.log('All your other issues are no longer in progress.');
    }
    */
  }
}
