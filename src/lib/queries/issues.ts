import { IssueConnectionFragment } from './issueFragment';

const gql = String.raw;

export const issuesQuery = gql`
  query issues(
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
  ) {
    issues(
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
  ${IssueConnectionFragment}
`;
