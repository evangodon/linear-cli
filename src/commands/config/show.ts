import fs from 'fs';
import { Command } from '@oclif/core';
import chalk from 'chalk';

/**
 * Read and show config file
 */
export default class ConfigShow extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  async run() {
    try {
      const configJSON = fs.readFileSync(this.configFilePath, {
        encoding: 'utf8',
      });

      this.log(configJSON);
      this.log('');
      this.log(`Config file path: ${chalk.magenta(this.configFilePath)}`);
    } catch (error) {
      this.error(error.message);
    }
  }
}
