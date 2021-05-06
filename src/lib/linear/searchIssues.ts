import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import { handleError } from '../handleError';
import { IssueSearchQuery } from '@linear/sdk/dist/_generated_documents';
import { IssueSearchQueryVariables } from 'generated/_documents';

const gql = String.raw;

const searchIssuesQuery = gql`
  query issueSearch(
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
    $query: String!
  ) {
    issueSearch(
      after: $after
      before: $before
      first: $first
      includeArchived: $includeArchived
      last: $last
      orderBy: $orderBy
      query: $query
    ) {
      nodes {
        id
        title
        identifier
      }
    }
  }
`;

type Options = {
  noSpinner?: boolean;
};

/**
 * Search issues
 */
export const searchIssues = (client: LinearGraphQLClient) => {
  return async (queryString: string, { noSpinner }: Options = {}) => {
    const spinner = ora({ isEnabled: !noSpinner }).start();
    const { data } = await client
      .rawRequest<IssueSearchQuery, IssueSearchQueryVariables>(searchIssuesQuery, {
        query: queryString,
      })
      .catch((error) => handleError(error));

    spinner.stop();

    if (!data) {
      throw new Error('No data returned from Linear');
    }

    return data.issueSearch.nodes;
  };
};
