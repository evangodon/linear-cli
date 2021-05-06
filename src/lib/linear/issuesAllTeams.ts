import ora from 'ora';
import { LinearDocument, LinearGraphQLClient } from '@linear/sdk';
import { handleError } from '../handleError';
import { IssuesQuery, IssuesQueryVariables } from 'generated/_documents';

import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

const issuesQuery = gql`
  query issues(
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
  ) {
    issues(
      after: $after
      before: $before
      first: $first
      includeArchived: $includeArchived
      last: $last
      orderBy: $orderBy
    ) {
      ...IssueConnection
    }
  }
  ${IssueConnectionFragment}
`;

/**
 * Get issues from all teams
 */
export const issuesAllTeams = (client: LinearGraphQLClient) => {
  return async () => {
    const spinner = ora('Loading issues').start();

    const { data } = await client
      .rawRequest<IssuesQuery, IssuesQueryVariables>(issuesQuery, {
        first: 50,
        orderBy: LinearDocument.PaginationOrderBy.CreatedAt,
      })
      .catch(handleError);

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.issues.nodes;
  };
};
