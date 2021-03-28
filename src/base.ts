import Command, { flags } from "@oclif/command";
import inquirer from "inquirer";
import fs from "fs";
import chalk from "chalk";
import { Linear } from "./lib/Linear";
import Init from "./commands/init";
import { ConfigSchema } from "./lib/configSchema";

export default abstract class extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  linear: Linear = (null as unknown) as Linear;

  async init() {
    const configFilePath = `${this.config.configDir}/config.json`;

    try {
      const configJSON = fs.readFileSync(configFilePath, {
        encoding: "utf8",
      });

      const config = JSON.parse(configJSON);

      if (!ConfigSchema.check(config)) {
        throw new Error(
          `The config file at ${chalk.magentaBright(
            this.configFilePath
          )} is in an invalid state`
        );
      }

      const { workspaces, activeWorkspace } = config;

      this.linear = new Linear(workspaces[activeWorkspace].apiKey);
    } catch (error) {
      /* Config folder doesn't exist */
      if (error.code === "ENOENT") {
        await this.promptForInit();
      }

      /* Error when parsing config file */

      /* Invalid config file */
      this.error(error);
    }
  }

  async promptForInit() {
    this.log(
      `\nLooks like ${chalk.magentaBright(
        this.config.bin
      )} hasn't been initialized yet!`
    );

    const response = await inquirer.prompt<{ runInit: boolean }>([
      {
        name: "runInit",
        message: "Run init command?",
        type: "confirm",
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
