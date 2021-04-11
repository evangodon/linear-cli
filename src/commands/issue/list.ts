import { flags } from '@oclif/command';
import { cli } from 'cli-ux';
import Command from '../../base';
import { render } from '../../utils';
import { TableIssue } from '../../utils/IssuesTable';

const tableColumns: (keyof TableIssue | 'status')[] = [
  'identifier',
  'status',
  'title',
  'assignee',
  'project',
];

export const tableFlags = {
  ...cli.table.flags(),
  sort: flags.string({
    char: 's',
    description: "property to sort by (prepend '-' for descending)",
    default: '-status',
    options: tableColumns,
  }),
  columns: flags.string({
    exclusive: ['extended'],
    description: 'only show provided columns (comma-separated)',
    options: tableColumns,
  }),
};

export default class IssueList extends Command {
  static description = 'List issues';

  static aliases = ['list', 'ls', 'l'];

  static flags = {
    ...tableFlags,
    mine: flags.boolean({ char: 'm', description: 'Only show issues assigned to me' }),
    team: flags.string({
      char: 't',
      description: 'List issues from another team',
    }),
    all: flags.boolean({ char: 'a', description: 'List issues from all teams' }),
  };

  async listAllTeamIssues() {
    const { flags } = this.parse(IssueList);
    const issues = await this.linear.getIssues();

    render.IssuesTable(issues, { flags });
  }

  async listMyIssues() {
    const { flags } = this.parse(IssueList);
    const issues = await this.linear.getMyAssignedIssues();

    render.IssuesTable(issues, { flags });
  }

  async listTeamIssues() {
    const { flags } = this.parse(IssueList);
    const teamId = flags.team ?? global.currentWorkspace.defaultTeam;
    const issues = await this.linear.getTeamIssues({
      teamId,
      first: flags.mine ? 50 : 35,
    });

    render.IssuesTable(issues, {
      flags: {
        ...flags,
        team: teamId,
      },
    });
  }

  async run() {
    const { flags } = this.parse(IssueList);

    if (flags.mine) {
      await this.listMyIssues();
      return;
    }

    if (flags.all) {
      this.listAllTeamIssues();
      return;
    }

    this.listTeamIssues();
  }
}
