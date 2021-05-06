import { LinearDocument, LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import {
  User_AssignedIssuesQuery,
  User_AssignedIssuesQueryVariables,
} from 'generated/_documents';

import { IssueConnectionFragment } from './issueFragment';
import { handleError } from '../handleError';

const gql = String.raw;

const assignedIssuesQuery = gql`
  query user_assignedIssues(
    $id: String!
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
  ) {
    user(id: $id) {
      assignedIssues(
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
  }
  ${IssueConnectionFragment}
`;

type Params = {
  disableSpinner?: boolean;
};

/** Get issues assigned to user */
export const assignedIssues = (client: LinearGraphQLClient) => {
  return async ({ disableSpinner }: Params = {}) => {
    const spinner = ora({ isEnabled: !disableSpinner }).start();

    const { data } = await client
      .rawRequest<User_AssignedIssuesQuery, User_AssignedIssuesQueryVariables>(
        assignedIssuesQuery,
        {
          id: global.user.id,
          first: 20,
          orderBy: LinearDocument.PaginationOrderBy.UpdatedAt,
        }
      )
      .catch(handleError)
      .finally(() => spinner.stop());

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.user.assignedIssues.nodes;
  };
};
