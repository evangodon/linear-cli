import { LinearClient } from '@linear/sdk';
import fs from 'fs';
import * as inquirer from 'inquirer';
import Command from '../../base';
import { Workplace, Config } from '../../lib/configSchema';

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
        message: 'Create a label for this key (e.g. "Work", "Home")',
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

    const newWorkplace: Workplace = {
      apiKey: response.apiKey,
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
  }
}
