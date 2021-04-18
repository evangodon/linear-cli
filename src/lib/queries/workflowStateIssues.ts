import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

/** Get all issues of workflow state */
export const statusIssuesQuery = gql`
  query statusIssues($id: String!) {
    workflowState(id: $id) {
      issues {
        ...IssueConnection
      }
    }
  }
  ${IssueConnectionFragment}
`;
