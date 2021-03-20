import Command from "../base";
import * as inquirer from "inquirer";
import fs from "fs";

type Response = {
  apiKey: string;
  label: string;
};

/**
 * @todo: Validate key
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
    const response: Response = await inquirer.prompt([
      {
        name: "apiKey",
        message: "Paste your Linear api key here:",
      },
      {
        name: "label",
        message: 'What a write label for this key (e.g. "Work", "Home")',
      },
    ]);

    await this.saveToConfig(response);
  }
}
