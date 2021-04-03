import { cli } from 'cli-ux';
import * as inquirer from 'inquirer';
import Command from '../../base';
import { render } from '../../utils';

const properties = ['title', 'description', 'status'] as const;
type Property = typeof properties[number];

type Args = { issueId: string } & { propertyToModify: Property };

/**
 */
export default class IssueUpdate extends Command {
  static description = 'Update an issue';

  static aliases = ['update', 'u'];

  static args = [
    { name: 'issueId', required: true },
    {
      name: 'propertyToModify',
      description: 'Property to update',
      options: (properties as unknown) as string[], // this needs to be type string[]
    },
  ];

  runUpdateMethod(property: Property) {
    switch (property) {
      case 'title':
        this.updateTitle();
        return;

      case 'status':
        return this.updateStatus();

      case 'description':
        return this.updateDescription();

      default:
        this.error(`Update operation for ${property} not implemented yet`);
    }
  }

  async promptForProperty() {
    const { property } = await inquirer.prompt<{ property: Property }>([
      {
        name: 'property',
        message: `What do you want to update`,
        type: 'list',
        choices: properties,
      },
    ]);

    this.runUpdateMethod(property);
  }

  /**
   * Update issue title
   */
  async updateTitle() {
    const {
      args: { issueId },
    } = this.parse<any, Args>(IssueUpdate);
    const { title } = await inquirer.prompt<{ title: string }>([
      {
        name: 'title',
        message: `New Title`,
        type: 'input',
      },
    ]);

    await this.linear.issueUpdate(issueId, { title });

    this.log('');
    this.log(`Issue ${issueId} has been updated with new title \`${title}\``);
  }

  /**
   * Update issue description
   */
  async updateDescription() {
    const {
      args: { issueId },
    } = this.parse<any, Args>(IssueUpdate);

    const issue = await this.linear.getIssue(issueId);

    const { description } = await inquirer.prompt<{ description: string }>([
      {
        name: 'description',
        message: `New Description`,
        type: 'editor',
        default: issue.description,
        postfix: 'md',
      },
    ]);

    await this.linear.issueUpdate(issueId, { description });
    this.log('');
    this.log(
      `The description of issue ${issue.identifier} has been successfully updated`
    );
  }

  /**
   * Update issue status
   */
  async updateStatus() {
    const {
      args: { issueId },
    } = this.parse<any, Args>(IssueUpdate);
    cli.action.start('Getting issue...');
    const issue = await this.linear.getIssue(issueId);
    cli.action.stop();
    const possibleStates = issue.team.states.nodes;

    const response = await inquirer.prompt<{ stateName: string }>([
      {
        name: 'stateName',
        message: `Choose a state (current: ${issue.state.name})`,
        type: 'list',
        choices: possibleStates,
      },
    ]);

    const newState = possibleStates.find((state) => state.name === response.stateName);

    if (!newState) {
      throw new Error('Did not find that state.');
    }

    await this.linear.issueUpdate(issueId, { stateId: newState.id });

    this.log(
      `\nUpdated status of issue ${issue.identifier} to ${render.Status(newState)}`
    );
  }

  async run() {
    const { args } = this.parse<any, Args>(IssueUpdate);

    if (!args.propertyToModify) {
      await this.promptForProperty();
      return;
    }

    this.runUpdateMethod(args.propertyToModify);
  }
}
