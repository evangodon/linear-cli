import { flags } from '@oclif/command';
import { cli } from 'cli-ux';
import Command from '../../base';
import { render } from '../../utils';

export default class IssueList extends Command {
  static description = 'List issues';

  static aliases = ['list', 'ls', 'l'];

  static flags = {
    ...cli.table.flags(),
    mine: flags.boolean({ char: 'm', description: 'Only show issues assigned to me' }),
  };

  async listIssues() {
    const { flags } = this.parse(IssueList);
    const issues = await this.linear.getIssues();

    this.log('');
    render.IssuesTable(issues, { log: this.log, flags });
  }

  async listMyIssues() {
    const { flags } = this.parse(IssueList);
    const issues = await this.linear.getMyAssignedIssues();

    if (issues.length === 0) {
      this.log("You currently don't have any issues assigned.");
      this.exit();
    }

    this.log('');
    render.IssuesTable(issues, { log: this.log, flags });
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
