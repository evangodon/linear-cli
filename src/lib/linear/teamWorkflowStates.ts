import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import { handleError } from '../handleError';
import {
  TeamWorkflowStatesQuery,
  TeamWorkflowStatesQueryVariables,
} from 'generated/_documents';

const gql = String.raw;

const teamWorkflowStatesQuery = gql`
  query teamWorkflowStates {
    teams {
      nodes {
        id
        name
        key
        states {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

/**
 * Get all possible workflow states of an issue
 */
export const teamWorkflowStates = (client: LinearGraphQLClient) => {
  return async () => {
    const spinner = ora().start();

    const { data } = await client
      .rawRequest<TeamWorkflowStatesQuery, TeamWorkflowStatesQueryVariables>(
        teamWorkflowStatesQuery
      )
      .catch((error) => handleError(error))
      .finally(() => spinner.stop());

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data;
  };
};
