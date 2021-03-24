import { cli } from "cli-ux";
import chalk from "chalk";
import * as inquirer from "inquirer";
import Command, { flags } from "../../base";
import { Linear } from "../../linear/Linear";

type Response = {
  stateName: string;
};

/**
 */
export default class IssueUpdate extends Command {
  static args = [{ name: "issueId", required: true }];

  static flags = {
    status: flags.boolean({
      char: "s",
      description: "Update issue status",
      default: true,
    }),
  };

  async updateStatus(issueId: string) {
    cli.action.start("Getting issue...");
    const linear = new Linear();
    const issue = await linear.getIssue(issueId);
    cli.action.stop();
    const possibleStates = issue.team.states.nodes;

    const response: Response = await inquirer.prompt([
      {
        name: "stateName",
        message: `Choose a state (current: ${issue.state.name})`,
        type: "list",
        choices: possibleStates,
      },
    ]);

    const newState = possibleStates.find(
      (state) => state.name === response.stateName
    );

    await linear.issueUpdate(issueId, { stateId: newState.id });

    this.log(
      `\nUpdated status of issue ${issue.identifier} to ${chalk.bgMagenta(
        ` ${newState.name} `
      )}`
    );
  }

  async run() {
    const { args, flags } = this.parse(IssueUpdate);

    const { issueId } = args;

    if (flags.status) {
      await this.updateStatus(issueId);
    }
  }
}
