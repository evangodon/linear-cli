import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import { handleError } from '../handleError';
import { StatusIssuesQuery, StatusIssuesQueryVariables } from 'generated/_documents';
import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

const statusIssuesQuery = gql`
  query statusIssues($id: String!) {
    workflowState(id: $id) {
      issues {
        ...IssueConnection
      }
    }
  }
  ${IssueConnectionFragment}
`;

/**
 * Get all issues of status
 */
export const issuesWithStatus = (client: LinearGraphQLClient) => {
  return async (statusId: string) => {
    const spinner = ora().start();

    const { data } = await client
      .rawRequest<StatusIssuesQuery, StatusIssuesQueryVariables>(statusIssuesQuery, {
        id: statusId,
      })
      .catch((error) => handleError(error))
      .finally(() => spinner.stop());

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.workflowState.issues.nodes;
  };
};
