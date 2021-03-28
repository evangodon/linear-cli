import Command, { flags } from "@oclif/command";
import inquirer from "inquirer";
import fs from "fs";
import { Linear } from "./lib/Linear";
import Init from "../lib/commands/init";
import chalk from "chalk";

export default abstract class extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  linear: Linear = (null as unknown) as Linear;

  async init() {
    const configFilePath = `${this.config.configDir}/config.json`;

    try {
      const config = fs.readFileSync(configFilePath, {
        encoding: "utf8",
      });

      // TODO: validate config shape here

      const { apiKey } = JSON.parse(config);

      this.linear = new Linear(apiKey);
    } catch (error) {
      if (error.code === "ENOENT") {
        await this.promptForInit();
      }

      // TODO: handle other errors
    }
  }

  async promptForInit() {
    this.log(
      `\nLooks like ${chalk.magenta(
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
