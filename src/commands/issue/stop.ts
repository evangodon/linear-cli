import * as inquirer from 'inquirer';
import ora from 'ora';
import { Flags } from '@oclif/core';
import { IssueUpdateInput } from '../../generated/_documents';
import chalk from 'chalk';
import Command from '../../base';
import { render } from '../../components';
import { issueArgs, getIssueId, IssueArgs } from '../../utils/issueId';

export default class IssueStop extends Command {
  static description = 'Return issue to preview state';

  static aliases = ['stop'];

  static flags = {
    unassign: Flags.boolean({ char: 'u', description: 'Unassign issue from yourself' }),
  };

  static args = issueArgs;

  async run() {
    const { args, flags } = await this.parse(IssueStop);

    const issueId = getIssueId(args);

    const issue = await this.linear.query.issue(issueId, { historyCount: 20 });

    if (issue.assignee?.id !== this.user.id) {
      const currentAssigneeMessage = issue.assignee?.id
        ? `Current assignee is ${chalk.blue(issue.assignee.displayName)}`
        : 'Currently nobody is assigned';

      return this.warn(
        `Issue ${render.IssueId(
          issue.identifier
        )} cannot be stopped because it is not assigned to you.\n${currentAssigneeMessage}.`
      );
    }

    if (issue.state.type !== 'started') {
      return this.warn(
        `Issue ${render.IssueId(
          issue.identifier
        )} is not in a started status.\nCurrent status: ${render.Status(issue.state)}`
      );
    }

    const { nextStateId } = await inquirer.prompt<{ nextStateId: string }>([
      {
        name: 'nextStateId',
        message: 'Select which status',
        type: 'list',
        choices: issue.team.states.nodes
          .filter((state) => state.type === 'unstarted')
          .map((state) => ({ name: render.Status(state), value: state.id })),
      },
    ]);

    const unassign: IssueUpdateInput = flags.unassign ? { assigneeId: null } : {};

    const spinner = ora('Updating issue').start();

    await this.linear.issueUpdate(issue.id, { stateId: nextStateId, ...unassign });

    const nextState = issue.team.states.nodes.find((state) => state.id === nextStateId);

    spinner.stop();

    this.log('');
    this.success(
      `The state of issue ${render.IssueId(
        issue.identifier
      )} now has status ${render.Status(nextState!)}${
        flags.unassign ? ' and is no longer assigned to you' : ''
      }.`
    );
  }
}
