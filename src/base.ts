import Command, { flags } from "@oclif/command";
import { Linear } from "./lib/Linear";

type LinearClient = Linear;

export default abstract class extends Command {
  linear: LinearClient = (null as unknown) as LinearClient;

  async init() {
    this.linear = new Linear();
  }
}

export { flags };
