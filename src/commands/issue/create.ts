import Command from "../../base";
import * as inquirer from "inquirer";

type Response = {
  title: string;
};

/**
 */
export default class IssueCreate extends Command {
  async createTicket(response: Response) {
    const teams = await this.linearClient.teams();

    const team = teams?.nodes[0];

    await this.linearClient.issueCreate({
      teamId: team.id,
      title: response.title,
    });
  }

  async run() {
    const response: Response = await inquirer.prompt([
      {
        name: "title",
        message: "title of the ticket",
      },
      {
        name: "description",
        message: "description of ticket",
      },
    ]);

    this.createTicket(response);
  }
}
