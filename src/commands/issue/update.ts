import { Flags } from '@oclif/core';
import chalk from 'chalk';
import * as inquirer from 'inquirer';
import ora from 'ora';
import Command from '../../base';
import { render } from '../../components';
import { issueArgs, getIssueId, IssueArgs } from '../../utils/issueId';

const properties = ['title', 'description', 'status'] as const;
type Property = typeof properties[number];

type Args = { issueId: string } & { propertyToModify: Property };

export default class IssueUpdate extends Command {
  static description = 'Update an issue';

  static aliases = ['update', 'u'];

  static flags = {
    property: Flags.string({
      char: 'p',
      description: 'Property to modify',
      options: ['title', 'description', 'status'],
    }),
  };

  static args = issueArgs;

  runUpdateMethod(issueId: string, property: Property) {
    function throwBadProperty(property: never): never {
      throw new Error(`Update operation for ${property} not implemented yet`);
    }

    switch (property) {
      case 'title':
        this.updateTitle(issueId);
        return;

      case 'status':
        return this.updateStatus(issueId);

      case 'description':
        return this.updateDescription(issueId);

      default:
        throwBadProperty(property);
    }
  }

  async promptForProperty(issueId: string) {
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

    this.runUpdateMethod(issueId, property);
  }

  /**
   * Update issue title
   */
  async updateTitle(issueId: string) {
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
  async updateDescription(issueId: string) {
    const issue = await this.linear.query.issue(issueId);

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
  async updateStatus(issueId: string) {
    const spinner = ora().start();
    const issue = await this.linear.query.issueWorkflowStates(issueId);

    const workflowStates = issue.team.states.nodes;

    spinner.stop();

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
        pageSize: 10,
      },
    ]);

    const newState = workflowStates.find((state) => state.id === stateName.id);

    if (!newState) {
      this.error('Did not find that state.');
    }

    await this.linear.issueUpdate(issueId, { stateId: newState.id });

    this.log('');
    this.success(
      `Updated status of issue ${chalk.magenta(issue.identifier)} to ${newState.name}`
    );
  }

  async run() {
    const { args, flags } = await await this.parse(IssueUpdate);

    const issueId = getIssueId(args);

    if (!flags.property) {
      await this.promptForProperty(issueId);
      return;
    }

    this.runUpdateMethod(issueId, flags.property as Property);
  }
}
