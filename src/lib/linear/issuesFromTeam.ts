import ora from 'ora';
import { LinearGraphQLClient } from '@linear/sdk';
import { TeamIssuesQuery, TeamIssuesQueryVariables } from 'generated/_documents';

import { IssueConnectionFragment } from './issueFragment';
import { handleError } from '../handleError';

const gql = String.raw;

const teamIssuesQuery = gql`
  query teamIssues($teamId: String!, $first: Int!) {
    team(id: $teamId) {
      issues(first: $first, orderBy: updatedAt) {
        ...IssueConnection
      }
      name
    }
  }
  ${IssueConnectionFragment}
`;

type Params = {
  teamId: string;
  first: number;
};

/**
 * Get issues from one team
 */
export const issuesFromTeams = (client: LinearGraphQLClient) => {
  return async ({ teamId, first }: Params) => {
    const spinner = ora('Loading issues').start();

    const { data } = await client
      .rawRequest<TeamIssuesQuery, TeamIssuesQueryVariables>(teamIssuesQuery, {
        teamId,
        first,
      })
      .catch(handleError)
      .finally(() => spinner.stop());

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.team.issues.nodes;
  };
};
