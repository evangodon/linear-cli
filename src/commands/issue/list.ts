import { OutputFlags } from '@oclif/parser/lib';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import Command, { Flags } from '../../base';
import { render } from '../../components';

export const tableFlags = {
  ...cli.table.flags(),
  sort: Flags.string({
    description: "property to sort by (prepend '-' for descending)",
    default: '-status',
  }),
  columns: Flags.string({
    exclusive: ['extended'],
    description: 'only show provided columns (comma-separated)',
  }),
};

export default class IssueList extends Command {
  static description = 'List issues';

  static aliases = ['list', 'ls', 'l'];

  static flags = {
    ...tableFlags,
    mine: Flags.boolean({ char: 'm', description: 'Only show issues assigned to me' }),
    team: Flags.string({
      char: 't',
      description: 'List issues from another team',
      exclusive: ['all'],
    }),
    status: Flags.string({
      char: 's',
      description: 'Only list issues with provided status',
      exclusive: ['all'],
    }),
    all: Flags.boolean({ char: 'a', description: 'List issues from all teams' }),
    uncompleted: Flags.boolean({
      char: 'u',
      description: 'Only show uncompleted issues',
      exclusive: ['status'],
    }),
  };

  async listAllTeamIssues() {
    const { flags } = await this.parse(IssueList);
    const issues = await this.linear.query.issuesAllTeams();

    render.IssuesTable(issues, { flags });
  }

  async listMyIssues() {
    const { flags } = await this.parse(IssueList);
    const issues = await this.linear.query.assignedIssues();

    render.IssuesTable(issues, { flags });
  }

  async listTeamIssues() {
    const { flags } = await this.parse(IssueList);
    const teamId = flags.team ?? global.currentWorkspace.defaultTeam;
    const issues = await this.linear.query.issuesFromTeam({
      teamId,
      first: 10,
    });

    render.IssuesTable(issues, {
      flags: {
        ...flags,
        team: teamId,
      },
    });
  }

  async listIssuesWithStatus() {
    const { flags } = await this.parse(IssueList);
    const cache = await this.cache.read();

    const teamId = flags.team ?? global.currentWorkspace.defaultTeam;
    const team = cache.teams[teamId.toUpperCase()];

    if (!team) {
      this.log(`Did not find team with key "${teamId}"`);
      this.log(`Teams found in cache:\n-`, Object.keys(cache.teams).join('\n- '));
      this.log(`You can try refreshing the cache with ${chalk.blue('lr cache:refresh')}`);
      return;
    }

    const match = team.states.find((state) =>
      state.name.toLowerCase().includes(String(flags.status).toLowerCase())
    );

    if (!match) {
      this.log(`Did not find any status with string "${flags.status}"\n`);
      this.log(
        `Statuses for team ${teamId} found in cache:\n-`,
        team.states.map((state) => state.name).join('\n- ')
      );
      this.log(`You can try refreshing the cache with ${chalk.blue('lr cache:refresh')}`);
      return;
    }

    const issues = await this.linear.query.issuesWithStatus(match?.id);

    render.IssuesTable(issues, {
      flags: {
        ...flags,
        team: teamId,
      },
    });
  }

  async run() {
    const { flags } = await this.parse(IssueList);

    if (flags.status) {
      this.listIssuesWithStatus();
      return;
    }

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
