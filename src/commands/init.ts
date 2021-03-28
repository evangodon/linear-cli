import { LinearClient } from "@linear/sdk";
import chalk from "chalk";
import * as inquirer from "inquirer";
import fs from "fs";
import Command from "@oclif/command";
import { Config } from "../lib/configSchema";

type Response = {
  apiKey: string;
  label: string;
};

/**
 * Write Linear api key and user info to config file
 *
 * @TODO: check if config file exists before running
 * @TODO: split out run() into multiple functions
 */
export default class Init extends Command {
  configFilePath = `${this.config.configDir}/config.json`;

  async run() {
    this.log("");
    this.log(`We'll need your personal Linear api key.`);
    this.log(
      `You can create one here ${chalk.magenta(
        "https://linear.app/joinlane/settings/api"
      )}.`
    );
    const response = await inquirer.prompt<Response>([
      {
        name: "apiKey",
        message: "Paste your Linear api key here:",
      },
      {
        name: "label",
        message: 'Create a label for this key (e.g. "Work", "Home")',
      },
    ]);

    const linearClient = new LinearClient({ apiKey: response.apiKey });

    const user = await linearClient.viewer;

    if (!user) {
      throw new Error("invalid api key");
    }

    if (!user.id) {
      throw new Error("Failed to get user id");
    }

    const { configDir } = this.config;
    try {
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir);
      }

      const config: Config = {
        activeWorkspace: response.label,
        workspaces: {
          [response.label]: {
            apiKey: response.apiKey,
            user: {
              id: user.id,
              name: user.name!,
              email: user.email!,
            },
          },
        },
      };

      await fs.promises.writeFile(
        this.configFilePath,
        JSON.stringify(config, null, 2),
        {
          flag: "w",
        }
      );

      this.log(`Wrote api key and user info to ${this.configFilePath}`);
    } catch (error) {
      this.error(error);
    }
  }
}
