import fs from 'fs';

import { LinearClient } from '@linear/sdk';
import boxen from 'boxen';
import ora from 'ora';
import chalk from 'chalk';
import * as inquirer from 'inquirer';
import { Command } from '@oclif/core';
import { Config, User } from '../lib/configSchema';
import CacheRefresh from './cache/refresh';

type PromptResponse = {
  apiKey: string;
  label: string;
};

type RequiredConfigData = {
  apiKey: string;
  workspaceLabel: string;
  user: User;
  defaultTeam: string;
};

/**
 * Write Linear api key and user info to config file
 *
 * @TODO: check if config file exists before running
 */
export default class Init extends Command {
  static description = 'Setup the Linear cli';

  configFilePath = `${this.config.configDir}/config.json`;

  async promptForKey(): Promise<PromptResponse> {
    return inquirer.prompt<PromptResponse>([
      {
        name: 'apiKey',
        message: 'Paste your Linear api key here:',
      },
      {
        name: 'label',
        message: 'Create a label for this key (e.g. "Work")',
      },
    ]);
  }

  async getWorkspaceInfo(apiKey: string): Promise<{ user: User; defaultTeam: string }> {
    const linearClient = new LinearClient({ apiKey });
    let user;

    const spinner = ora('Getting your user info').start();

    try {
      user = await linearClient.viewer;
    } catch (error) {
      this.error('Invalid api key');
    }

    /* If no user, probably means key is invalid */
    if (!user) {
      this.error('Invalid api key');
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

    spinner.stop();

    const { defaultTeam } = await inquirer.prompt<{ defaultTeam: string }>([
      {
        name: 'defaultTeam',
        message: 'Select your default team',
        type: 'list',
        choices: teams,
      },
    ]);

    return {
      user: {
        id: user.id!,
        name: user.name!,
        email: user.email!,
      },
      defaultTeam,
    };
  }

  async writeConfigFile({
    apiKey,
    workspaceLabel,
    user,
    defaultTeam,
  }: RequiredConfigData) {
    const { configDir } = this.config;
    try {
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir);
      }

      const config: Config = {
        activeWorkspace: workspaceLabel,
        workspaces: {
          [workspaceLabel]: {
            apiKey,
            defaultTeam,
            user,
          },
        },
      };

      await fs.promises.writeFile(this.configFilePath, JSON.stringify(config, null, 2), {
        flag: 'w',
      });

      this.log('');
      this.log(`Wrote api key and user info to ${this.configFilePath}`);
      this.log('');
    } catch (error) {
      this.error(error);
    }
  }

  async run() {
    this.log('');
    this.log(`You'll need to create a personal Linear api key.`);
    this.log(
      `You can create one here ${chalk.magenta(
        'https://linear.app/settings/api'
      )}.`
    );

    const response = await this.promptForKey();

    const { user, defaultTeam } = await this.getWorkspaceInfo(response.apiKey);

    await this.writeConfigFile({
      apiKey: response.apiKey,
      workspaceLabel: response.label,
      user,
      defaultTeam,
    });

    await CacheRefresh.run();

    this.log(
      boxen(`${chalk.green('✓')} Linear CLI setup successful!`, {
        padding: 1,
        borderStyle: 'round',
      })
    );
  }
}
