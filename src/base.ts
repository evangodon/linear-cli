import Command, { flags } from '@oclif/command';
import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import { Linear } from './lib/Linear';
import Init from './commands/init';
import { Config, User } from './lib/configSchema';

import type { Workspace } from './lib/configSchema';

declare global {
  namespace NodeJS {
    interface Global {
      currentWorkspace: Workspace;
      user: User;
      log: (message?: string | undefined, ...args: any[]) => void;
    }
  }
}

export default abstract class extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  linear: Linear = (null as unknown) as Linear;

  user: User = (null as unknown) as User;

  currentWorkspace: Workspace = (null as unknown) as Workspace;

  configData: Config = (null as unknown) as Config;

  async init() {
    const configFilePath = `${this.config.configDir}/config.json`;

    try {
      const configJSON = fs.readFileSync(configFilePath, {
        encoding: 'utf8',
      });

      const configUnknown: unknown = JSON.parse(configJSON);
      const config = Config.parse(configUnknown);

      const { workspaces, activeWorkspace } = config;

      this.configData = config;
      const currentUser = workspaces[activeWorkspace].user;

      this.linear = new Linear({
        apiKey: workspaces[activeWorkspace].apiKey,
        currentUser,
      });
      this.user = currentUser;
      this.currentWorkspace = workspaces[activeWorkspace];

      global.log = this.log;
      global.user = this.user;
      global.currentWorkspace = this.currentWorkspace;
    } catch (error) {
      /* Config folder doesn't exist */
      if (error.code === 'ENOENT') {
        await this.promptForInit();
      }

      /*  Invalid JSON in config file */
      if (String(error).includes('SyntaxError')) {
        this.error(`Invalid json in config file \n${error}`);
      }

      /*  Invalid config file */
      this.error(error);
    }
  }

  async promptForInit() {
    this.log(`No config found`);
    this.log(
      `\nLooks like ${chalk.magentaBright(this.config.bin)} hasn't been initialized yet!`
    );

    const response = await inquirer.prompt<{ runInit: boolean }>([
      {
        name: 'runInit',
        message: 'Run init command?',
        type: 'confirm',
      },
    ]);

    if (response.runInit) {
      await Init.run();
    } else {
      process.exit(0);
    }
  }
}

export { flags };
