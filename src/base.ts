import * as Parser from '@oclif/parser';
import Command, { flags } from '@oclif/command';
import fs from 'fs';
import chalk from 'chalk';
import { Linear } from './lib/linear/Linear';
import { Config, User, Workspace } from './lib/configSchema';
import { Cache } from './lib/Cache';

declare global {
  namespace NodeJS {
    interface Global {
      currentWorkspace: Workspace;
      user: User;
      log: (message?: string | undefined, ...args: any[]) => void;
    }
  }
}

export type GetFlagsType<T> = T extends Parser.Input<infer F> ? F : never;

export default abstract class extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  linear: Linear = (null as unknown) as Linear;

  user: User = (null as unknown) as User;

  currentWorkspace: Workspace = (null as unknown) as Workspace;

  configData: Config = (null as unknown) as Config;

  cache: Cache = (null as unknown) as Cache;

  async init() {
    const configFilePath = `${this.config.configDir}/config.json`;

    try {
      const configJSON = fs.readFileSync(configFilePath, {
        encoding: 'utf8',
      });

      const configUnknown: unknown = JSON.parse(configJSON);
      const configData = Config.parse(configUnknown);

      const { workspaces, activeWorkspace } = configData;

      this.configData = configData;
      const currentUser = workspaces[activeWorkspace].user;

      this.linear = new Linear({
        apiKey: workspaces[activeWorkspace].apiKey,
        currentUser,
      });
      this.cache = new Cache({
        config: this.config,
        configData,
        linear: this.linear,
      });
      this.user = currentUser;
      this.currentWorkspace = workspaces[activeWorkspace];

      global.log = this.log;
      global.user = this.user;
      global.currentWorkspace = this.currentWorkspace;
    } catch (error) {
      /* Config folder doesn't exist */
      if (error.code === 'ENOENT') {
        this.warnToInit();
        this.exit();
      }

      /*  Invalid JSON in config file */
      if (String(error).includes('SyntaxError')) {
        this.error(`Invalid json in config file \n${error}`);
      }

      /*  Invalid config file */
      this.error(error);
    }
  }

  warnToInit() {
    this.log(`No config found`);
    this.log(`\nLooks like you haven't initialized the cli yet!`);

    this.log(`You need to run ${chalk.blue('lr init')} first to setup your api key.`);
  }

  success(msg: string) {
    this.log(`${chalk.green('???')} ${msg}`);
  }
}

export { flags };
