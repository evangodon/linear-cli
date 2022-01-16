import fs from 'fs';
import { Config as IConfig } from '@oclif/core';
import { CacheSchema, CacheData } from './cacheSchema';
import { Config } from './configSchema';
import { Linear } from './linear/Linear';

type Params = {
  config: IConfig;
  configData: Config;
  linear: Linear;
};

export class Cache {
  config: IConfig;

  configData: Config;

  linear: Linear;

  cachePath: string;

  constructor({ config, configData, linear }: Params) {
    this.config = config;
    this.linear = linear;
    this.configData = configData;
    this.cachePath = `${config.cacheDir}/${configData.activeWorkspace}.json`;
  }

  makeCachePath(workspace: string) {
    return `${this.config.cacheDir}/${workspace}.json`;
  }

  exists(workspace: string = this.configData.activeWorkspace) {
    const path = this.makeCachePath(workspace);
    return fs.existsSync(path);
  }

  async read(): Promise<CacheData> {
    let cache: CacheData = { teams: {}, date: '' };

    if (!this.exists()) {
      await this.refresh();
    }

    try {
      const cacheJson = fs.readFileSync(this.cachePath, {
        encoding: 'utf8',
      });

      const cacheUnknown: unknown = JSON.parse(cacheJson);

      cache = CacheSchema.parse(cacheUnknown);
    } catch (error) {
      console.error(error);
    }

    return cache;
  }

  async refresh() {
    const data = await this.linear.query.teamWorkflowStates();

    const cache: CacheData = data.teams.nodes.reduce(
      (acc: CacheData, currentTeam) => {
        acc.teams[currentTeam.key] = {
          states: currentTeam.states.nodes.map((state) => state),
        };

        return acc;
      },
      { date: new Date().toString(), teams: {} }
    );

    try {
      await fs.promises.writeFile(this.cachePath, JSON.stringify(cache, null, 2), {
        flag: 'w',
      });
    } catch (error) {
      console.warn(`Failed to write cache data to ${this.cachePath}`);
    }
  }
}
