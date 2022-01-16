import fs from 'fs';
import { Command } from '@oclif/core';

/**
 */
export default class ConfigDelete extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  async run() {
    try {
      await fs.promises.unlink(this.configFilePath);
      this.log(`Delete config file at ${this.configFilePath}`);
    } catch (error) {
      this.error(error.message);
    }
  }
}
