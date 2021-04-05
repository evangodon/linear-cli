const gql = String.raw;

export const teamsQuery = gql`
  query teams(
    $after: String
    $before: String
    $first: Int
    $includeArchived: Boolean
    $last: Int
    $orderBy: PaginationOrderBy
  ) {
    teams(
      after: $after
      before: $before
      first: $first
      includeArchived: $includeArchived
      last: $last
      orderBy: $orderBy
    ) {
      ...TeamConnection
    }
  }
  fragment TeamConnection on TeamConnection {
    nodes {
      ...Team
    }
  }
  fragment Team on Team {
    description
    name
    key
    id
  }
`;
