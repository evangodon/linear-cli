import { cli } from 'cli-ux';
import { TeamConnection } from '@linear/sdk';
import Command, { flags } from '../../base';

type Team = {
  key?: string;
  name?: string;
};

export default class TeamsShow extends Command {
  static description = 'Show teams in this workspace';

  static flags = {
    mine: flags.boolean({ char: 'm', description: 'Pretty print' }),
  };

  async run() {
    const { flags } = this.parse(TeamsShow);

    let data: TeamConnection | undefined;

    if (flags.mine) {
      const user = await this.linear.user(this.user.id);
      data = await user?.teams();
    } else {
      data = await this.linear.teams();
    }

    if (!data || !data.nodes) {
      this.error('Failed to fetch teams');
    }

    const teams: Team[] = data.nodes.map((team) => ({ key: team.key, name: team.name }));

    cli.table(
      teams,
      {
        key: {
          minWidth: 10,
        },
        name: {},
      },
      { printLine: this.log }
    );
  }
}
