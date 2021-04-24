const gql = String.raw;

export const searchIssuesQuery = gql`
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
