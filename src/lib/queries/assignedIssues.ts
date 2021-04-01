import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

export const assignedIssuesQuery = gql`
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
