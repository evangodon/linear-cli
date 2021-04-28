import { flags } from '@oclif/command';
import { IssueUpdateInput } from '../../generated/_documents';
import chalk from 'chalk';
import Command, { GetFlagsType } from '../../base';
import { render } from '../../components';
import { issueArgs, getIssueId, IssueArgs } from '../../utils/issueId';

export default class IssueStop extends Command {
  static description = 'Return issue to preview state';

  static aliases = ['stop'];

  static flags = {
    unassign: flags.boolean({ char: 'u', description: 'Unassign issue from yourself' }),
  };

  static args = issueArgs;

  async run() {
    const { args, flags } = this.parse<GetFlagsType<typeof IssueStop>, IssueArgs>(
      IssueStop
    );

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
        )} is not in a started workflow.\nCurrent state is ${chalk.blue(
          issue.state.name
        )}`
      );
    }

    const historyNode = issue.history.nodes.find((node) => Boolean(node.fromState));

    if (!historyNode) {
      this.error('Could not find previous workflow state');
    }

    const stateId = historyNode.fromState!.id;

    const unassign: IssueUpdateInput = flags.unassign ? { assigneeId: null } : {};

    await this.linear.issueUpdate(issue.id, { stateId, ...unassign });

    this.log('');
    this.success(
      `The state of issue ${render.IssueId(issue.identifier)} is now in the '${
        historyNode?.fromState?.name
      }' state and is no longer assigned to you.`
    );
  }
}
