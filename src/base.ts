import Command, { flags } from "@oclif/command";
import { LinearClient, User } from "@linear/sdk";
import fs from "fs";

/**
 * TODO: save user data to config file
 */
export default abstract class extends Command {
  configFile = `${this.config.configDir}/config.json`;

  linearClient: LinearClient = (null as unknown) as LinearClient;

  user: User = (null as unknown) as User;

  async init() {
    this.linearClient = await this.getLinearClient();
    const user = await this.linearClient.viewer;

    if (!user) {
      this.error("Error getting your user info.");
    }

    this.user = user;
  }

  async getLinearClient() {
    let client = null;

    try {
      const config = await fs.promises.readFile(this.configFile, {
        encoding: "utf8",
      });
      const { apiKey } = JSON.parse(config);

      client = new LinearClient({ apiKey });
    } catch (error) {
      this.error(error);
    }

    return client;
  }
}

export { flags };
