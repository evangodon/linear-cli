import { LinearGraphQLClient } from '@linear/sdk';
import ora from 'ora';
import { GetIssueQuery, GetIssueQueryVariables } from 'generated/_documents';
import { handleError } from '../handleError';

const gql = String.raw;

const issueQuery = gql`
  query getIssue($id: String!, $withComments: Boolean!, $historyCount: Int!) {
    issue(id: $id) {
      history(first: $historyCount) {
        nodes {
          actor {
            displayName
          }
          createdAt
          fromState {
            id
            name
          }
        }
      }
      archivedAt
      comments @include(if: $withComments) {
        nodes {
          user {
            displayName
          }
          body
          createdAt
        }
      }
      trashed
      url
      identifier
      createdAt
      project {
        name
      }
      creator {
        id
        displayName
      }
      priorityLabel
      previousIdentifiers
      branchName
      cycle {
        id
      }
      estimate
      description
      title
      number
      labels {
        nodes {
          name
          color
        }
      }
      parent {
        id
      }
      priority
      project {
        id
      }
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

type IssueQueryOptions = {
  withComments?: boolean;
  historyCount?: number;
};

/** Get one specific issue */
export const issue = (client: LinearGraphQLClient) => {
  return async (
    issueId: string,
    { withComments = false, historyCount = 1 }: IssueQueryOptions = {}
  ) => {
    const spinner = ora().start();

    const { data } = await client
      .rawRequest<GetIssueQuery, GetIssueQueryVariables>(issueQuery, {
        id: issueId,
        withComments,
        historyCount,
      })
      .catch(handleError)
      .finally(() => spinner.stop());

    if (!data || !data.issue) {
      throw new Error('No data returned from Linear');
    }

    return data.issue;
  };
};
