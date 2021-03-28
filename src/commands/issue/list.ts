import { flags } from '@oclif/command';
import Command from '../../base';
import { createIssuesTable } from '../../utils/createIssuesTable';

export default class IssueList extends Command {
  static description = 'List issues';

  static flags = {
    mine: flags.boolean({ char: 'm' }),
  };

  async listIssues() {
    const issues = await this.linear.getIssues();

    this.log('');
    createIssuesTable(issues, { log: this.log });
  }

  async listMyIssues() {
    const issues = await this.linear.getMyAssignedIssues();

    if (issues.length === 0) {
      this.log("You currently don't have any issues assigned.");
    }

    this.log('');
    createIssuesTable(issues, { log: this.log });
  }

  async run() {
    const { flags } = this.parse(IssueList);

    if (flags.mine) {
      await this.listMyIssues();
      return;
    }

    this.listIssues();
  }
}
