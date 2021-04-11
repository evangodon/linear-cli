import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

/** Get team issues */
export const teamIssuesQuery = gql`
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
