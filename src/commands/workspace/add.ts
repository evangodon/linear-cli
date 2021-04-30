import { LinearClient } from '@linear/sdk';
import chalk from 'chalk';
import fs from 'fs';
import * as inquirer from 'inquirer';
import Command from '../../base';
import { Workspace, Config } from '../../lib/configSchema';

type PromptResponse = {
  apiKey: string;
  label: string;
};

export default class WorkspaceAdd extends Command {
  static description = 'Add a new workplace';

  async run() {
    const response = await inquirer.prompt<PromptResponse>([
      {
        name: 'apiKey',
        message: 'Paste your Linear api key here:',
      },
      {
        name: 'label',
        message: 'Create a label for this key',
        validate: (input: string) => {
          if (input.trim().length === 0) {
            return 'The label needs to be at least one character';
          }
          return true;
        },
      },
    ]);

    const linearClient = new LinearClient({ apiKey: response.apiKey });

    const user = await linearClient.viewer;

    if (!user) {
      throw new Error('Invalid Linear api key');
    }

    if (!user.id) {
      throw new Error('Failed to get user id');
    }

    const teamConnection = await linearClient.teams();

    if (!teamConnection) {
      this.error('Failed to get your teams');
    }

    const teams = teamConnection.nodes?.map((team) => ({
      id: team.id,
      name: team.name,
      value: team.key,
    }));

    const { defaultTeam } = await inquirer.prompt<{ defaultTeam: string }>([
      {
        name: 'defaultTeam',
        message: 'Select your default team',
        type: 'list',
        choices: teams,
      },
    ]);

    const newWorkplace: Workspace = {
      apiKey: response.apiKey,
      defaultTeam,
      user: {
        id: user.id,
        name: user.name!,
        email: user.email!,
      },
    };

    const newConfig: Config = {
      ...this.configData,
      workspaces: {
        ...this.configData.workspaces,
        [response.label]: newWorkplace,
      },
    };

    await fs.promises.writeFile(this.configFilePath, JSON.stringify(newConfig, null, 2), {
      flag: 'w',
    });

    this.log('');
    this.success(`Workspace with label ${chalk.blue(response.label)} added.`);
  }
}
