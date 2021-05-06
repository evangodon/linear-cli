import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';

import { TeamsQuery, TeamsQueryVariables } from 'generated/_documents';
import { handleError } from '../handleError';

const gql = String.raw;

const teamsQuery = gql`
  query teams(
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
  ) {
    teams(
      after: $after
      before: $before
      first: $first
      includeArchived: $includeArchived
      last: $last
      orderBy: $orderBy
    ) {
      ...TeamConnection
    }
  }
  fragment TeamConnection on TeamConnection {
    nodes {
      ...Team
    }
  }
  fragment Team on Team {
    description
    name
    key
    id
  }
`;

/** Get all teams  */
export const allTeams = (client: LinearGraphQLClient) => {
  return async () => {
    const spinner = ora().start();

    const { data } = await client
      .rawRequest<TeamsQuery, TeamsQueryVariables>(teamsQuery)
      .catch((error) => handleError(error));

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.teams.nodes;
  };
};
