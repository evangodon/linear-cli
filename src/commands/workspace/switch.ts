import * as inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import Command from '../../base';
import { Config } from '../../lib/configSchema';

type PromptResponse = {
  workspace: string;
};

/**
 * @todo: Highlight the current workspace
 */
export default class WorkspaceSwitch extends Command {
  static description = 'Switch to another workspace';

  async run() {
    const response = await inquirer.prompt<PromptResponse>([
      {
        name: 'workspace',
        message: 'Select workspace',
        type: 'list',
        choices: Object.keys(this.configData.workspaces).map((workspace) =>
          workspace === this.configData.activeWorkspace
            ? `${workspace} (current)`
            : workspace
        ),
      },
    ]);

    const newConfig: Config = {
      ...this.configData,
      activeWorkspace: response.workspace,
    };

    await fs.promises.writeFile(this.configFilePath, JSON.stringify(newConfig, null, 2), {
      flag: 'w',
    });

    this.log('');
    this.log(`Switched to ${chalk.magenta(response.workspace)} workspace`);
  }
}
