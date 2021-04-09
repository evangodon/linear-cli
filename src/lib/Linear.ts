import { LinearClient, LinearDocument } from '@linear/sdk';
import ora from 'ora';
import { issuesQuery } from './queries/issues';
import { assignedIssuesQuery } from './queries/assignedIssues';
import { issueQuery } from './queries/issue';
import { handleError } from './handleError';
import { User } from './configSchema';
import { teamsQuery } from './queries/teams';
import {
  TeamsQuery,
  TeamsQueryVariables,
  GetIssueWorkflowStatesQuery,
  GetIssueWorkflowStatesQueryVariables,
} from '../generated/_documents';
import { issueWorkflowStatesQuery } from './queries/issueWorflowStates';
import {
  IssuesQuery,
  IssuesQueryVariables,
  User_AssignedIssuesQuery,
  User_AssignedIssuesQueryVariables,
  GetIssueQuery,
  GetIssueQueryVariables,
} from '../generated/_documents';

type UserInfo = {
  apiKey: string;
  currentUser: User;
};

/**
 * Custom Linear client
 */
export class Linear extends LinearClient {
  currentUser: User = (null as unknown) as User;

  constructor({ apiKey, currentUser }: UserInfo) {
    super({ apiKey });

    this.currentUser = currentUser;
  }

  async getIssues() {
    let issues: IssuesQuery['issues']['nodes'] = [];
    const spinner = ora('Loading issues').start();

    try {
      const { data } = await this.client.rawRequest<IssuesQuery, IssuesQueryVariables>(
        issuesQuery,
        { first: 30, orderBy: LinearDocument.PaginationOrderBy.UpdatedAt }
      );

      if (!data) {
        throw new Error('No data returned from Linear');
      }

      issues = data.issues.nodes;
    } catch (error) {
      handleError(error);
    } finally {
      spinner.stop();
    }

    return issues;
  }

  async getMyAssignedIssues({ disableSpinner }: { disableSpinner?: boolean } = {}) {
    let issues: User_AssignedIssuesQuery['user']['assignedIssues']['nodes'] = [];
    const spinner = ora({ isEnabled: !disableSpinner }).start();

    try {
      const { data } = await this.client.rawRequest<
        User_AssignedIssuesQuery,
        User_AssignedIssuesQueryVariables
      >(assignedIssuesQuery, {
        id: this.currentUser.id,
        first: 20,
        orderBy: LinearDocument.PaginationOrderBy.UpdatedAt,
      });

      if (!data) {
        throw new Error('No data returned from Linear');
      }

      issues = data.user.assignedIssues.nodes ?? [];
    } catch (error) {
      handleError(error);
    } finally {
      spinner.stop();
    }

    return issues;
  }

  async getIssue(issueId: string) {
    let issue: GetIssueQuery['issue'] = (null as unknown) as GetIssueQuery['issue'];

    const spinner = ora().start();

    try {
      const { data } = await this.client.rawRequest<
        GetIssueQuery,
        GetIssueQueryVariables
      >(issueQuery, {
        id: issueId,
      });

      if (!data) {
        throw new Error('No data returned from Linear');
      }

      issue = data.issue;
    } catch (error) {
      handleError(error);
    } finally {
      spinner.stop();
    }

    return issue;
  }

  async getTeams() {
    const spinner = ora().start();

    const { data } = await this.client
      .rawRequest<TeamsQuery, TeamsQueryVariables>(teamsQuery)
      .catch((error) => handleError(error));

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.teams.nodes;
  }

  async getIssueWorkflowStates(issueId: string) {
    let issue: GetIssueWorkflowStatesQuery['issue'] = (null as unknown) as GetIssueWorkflowStatesQuery['issue'];

    const spinner = ora().start();

    try {
      const { data } = await this.client.rawRequest<
        GetIssueWorkflowStatesQuery,
        GetIssueWorkflowStatesQueryVariables
      >(issueWorkflowStatesQuery, {
        id: issueId,
      });

      if (!data) {
        throw new Error('No data returned from Linear');
      }

      issue = data.issue;
    } catch (error) {
      handleError(error);
    } finally {
      spinner.stop();
    }

    return issue;
  }
}
