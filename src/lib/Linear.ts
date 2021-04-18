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
import { teamIssuesQuery } from './queries/teamIssues';
import { teamWorkflowStatesQuery } from './queries/teamWorkflowStates';
import { statusIssuesQuery } from './queries/workflowStateIssues';
import {
  GetIssueQuery,
  GetIssueQueryVariables,
  IssuesQuery,
  IssuesQueryVariables,
  TeamIssuesQuery,
  TeamIssuesQueryVariables,
  TeamWorkflowStatesQuery,
  TeamWorkflowStatesQueryVariables,
  User_AssignedIssuesQuery,
  User_AssignedIssuesQueryVariables,
  StatusIssuesQuery,
  StatusIssuesQueryVariables,
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

  get query() {
    return {
      statusIssues: async (statusId: string) => this.getStatusIssues(statusId),
    };
  }

  /** Get issues from all teams */
  async getIssues() {
    let issues: IssuesQuery['issues']['nodes'] = [];
    const spinner = ora('Loading issues').start();

    try {
      const { data } = await this.client.rawRequest<IssuesQuery, IssuesQueryVariables>(
        issuesQuery,
        { first: 50, orderBy: LinearDocument.PaginationOrderBy.CreatedAt }
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

  /** Get team issues */
  async getTeamIssues({ teamId, first = 35 }: { teamId: string; first?: number }) {
    let issues: TeamIssuesQuery['team']['issues']['nodes'] = [];
    const spinner = ora('Loading issues').start();

    try {
      const { data } = await this.client.rawRequest<
        TeamIssuesQuery,
        TeamIssuesQueryVariables
      >(teamIssuesQuery, {
        teamId,
        first,
      });

      if (!data) {
        throw new Error('No data returned from Linear');
      }

      issues = data.team.issues.nodes;
    } catch (error) {
      handleError(error);
    } finally {
      spinner.stop();
    }

    return issues;
  }

  /** Get issues assigned to user */
  async getMyAssignedIssues({ disableSpinner }: { disableSpinner?: boolean } = {}) {
    let issues: User_AssignedIssuesQuery['user']['assignedIssues']['nodes'] = [];
    const spinner = ora({ isEnabled: !disableSpinner }).start();

    try {
      const { data } = await this.client.rawRequest<
        User_AssignedIssuesQuery,
        User_AssignedIssuesQueryVariables
      >(assignedIssuesQuery, {
        id: this.currentUser.id,
        first: 35,
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

  /** Get one specific issue */
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

  /** Get all teams  */
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

  /** Get all possible workflow states of an issue  */
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

  /** Get all team workflow states  */
  async getTeamWorkflowStates() {
    const spinner = ora().start();

    const { data } = await this.client
      .rawRequest<TeamWorkflowStatesQuery, TeamWorkflowStatesQueryVariables>(
        teamWorkflowStatesQuery
      )
      .catch((error) => handleError(error));

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data;
  }

  /** Get all issues of status */
  async getStatusIssues(statusId: string) {
    let issues: StatusIssuesQuery['workflowState']['issues']['nodes'] = [];
    const spinner = ora().start();

    const { data } = await this.client
      .rawRequest<StatusIssuesQuery, StatusIssuesQueryVariables>(statusIssuesQuery, {
        id: statusId,
      })
      .catch((error) => handleError(error));

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    issues = data.workflowState.issues.nodes;

    return issues;
  }
}
