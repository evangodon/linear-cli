import Command from "../../base";

/**
 */
export default class IssueCreate extends Command {
  static description = "Create a new issue";

  async createTicket() {
    this.log("This hasn't been implemented yet");
  }

  async run() {
    this.createTicket();
  }
}
