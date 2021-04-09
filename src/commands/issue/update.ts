import chalk from 'chalk';
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
        choices: properties.map((property) => ({
          name: property[0].toUpperCase() + property.slice(1),
          value: property,
        })),
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
    this.log(`Issue ${chalk.magenta(issueId)} has been updated with title \`${title}\``);
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
    this.log(`The description of issue ${issue.identifier} has been updated`);
  }

  /**
   * Update issue status
   */
  async updateStatus() {
    const {
      args: { issueId },
    } = this.parse<any, Args>(IssueUpdate);
    const issue = await this.linear.getIssueWorkflowStates(issueId);

    console.log(issue);

    const workflowStates = issue.team.states.nodes;

    const { stateName } = await inquirer.prompt<{ stateName: typeof workflowStates[0] }>([
      {
        name: 'stateName',
        message: `Choose a state (current: ${render.Status(issue.state)})`,
        type: 'list',
        choices: workflowStates
          .filter((state) => state.id !== issue.state.id)
          .map((state) => ({
            name: render.Status(state),
            value: state,
          })),
      },
    ]);

    const newState = workflowStates.find((state) => state.id === stateName.id);

    if (!newState) {
      this.error('Did not find that state.');
    }

    await this.linear.issueUpdate(issueId, { stateId: newState.id });

    this.log(
      `\nUpdated status of issue ${chalk.magenta(issue.identifier)} to ${newState.name}`
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
