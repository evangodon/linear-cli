import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import {
  GetIssueWorkflowStatesQuery,
  GetIssueWorkflowStatesQueryVariables,
} from 'generated/_documents';
import { handleError } from '../handleError';

const gql = String.raw;

const issueWorkflowStatesQuery = gql`
  query getIssueWorkflowStates($id: String!) {
    issue(id: $id) {
      identifier
      team {
        id
        name
        states {
          nodes {
            id
            name
            type
            color
            position
          }
        }
      }
      id
      assignee {
        id
        name
        displayName
      }
      state {
        id
        name
        type
        color
      }
    }
  }
`;

/**
 * Get all possible workflow states of an issue
 */
export const issueWorkflowStates = (client: LinearGraphQLClient) => {
  return async (issueId: string) => {
    const spinner = ora().start();

    const { data } = await client
      .rawRequest<GetIssueWorkflowStatesQuery, GetIssueWorkflowStatesQueryVariables>(
        issueWorkflowStatesQuery,
        {
          id: issueId,
        }
      )
      .catch(handleError)
      .finally(() => spinner.stop());

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.issue;
  };
};
