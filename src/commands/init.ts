import chalk from "chalk";
import * as inquirer from "inquirer";
import fs from "fs";
import Command from "@oclif/command";

type Response = {
  apiKey: string;
  label: string;
};

/**
 * Write Linear api key and user info to config file
 *
 * @TODO: check if config file exists before running
 */
export default class Init extends Command {
  async saveToConfig(response: Response) {
    const { configDir } = this.config;
    try {
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir);
      }

      await fs.promises.writeFile(
        `${this.config.configDir}/config.json`,
        JSON.stringify(response),
        { flag: "w" }
      );
    } catch (error) {
      this.error(error);
    }
  }

  async run() {
    this.log("");
    this.log(`We'll need your personal Linear api key.`);
    this.log(
      `You can create one here ${chalk.magenta(
        "https://linear.app/joinlane/settings/api"
      )}.`
    );
    const response: Response = await inquirer.prompt([
      {
        name: "apiKey",
        message: "Paste your Linear api key here:",
      },
      {
        name: "label",
        message: 'Create a label for this key (e.g. "Work", "Home")',
      },
    ]);

    // TODO: validate key here

    await this.saveToConfig(response);
  }
}
