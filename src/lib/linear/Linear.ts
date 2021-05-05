import { LinearClient } from '@linear/sdk';
import { User } from '../configSchema';
import { issuesAllTeams } from './issuesAllTeams';
import { issuesFromTeams } from './issuesFromTeam';
import { issue } from './issue';
import { allTeams } from './allTeams';
import { issueWorkflowStates } from './issueWorkflowStates';
import { teamWorkflowStates } from './teamWorkflowStates';
import { issuesWithStatus } from './issuesWithStatus';
import { assignedIssues } from './assignedIssues';
import { searchIssues } from './searchIssues';

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
      allTeams: allTeams(this.client),
      assignedIssues: assignedIssues(this.client),
      issue: issue(this.client),
      issueWorkflowStates: issueWorkflowStates(this.client),
      issuesAllTeams: issuesAllTeams(this.client),
      issuesFromTeam: issuesFromTeams(this.client),
      issuesWithStatus: issuesWithStatus(this.client),
      searchIssues: searchIssues(this.client),
      teamWorkflowStates: teamWorkflowStates(this.client),
    };
  }
}
