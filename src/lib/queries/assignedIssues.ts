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
        nodes {
          trashed
          url
          identifier
          priorityLabel
          previousIdentifiers
          branchName
          estimate
          description
          title
          number
          updatedAt
          boardOrder
          subIssueSortOrder
          parent {
            id
          }
          priority
          project {
            id
          }
          team {
            id
          }
          startedAt
          id
          assignee {
            id
          }
          creator {
            id
          }
          state {
            id
            name
            color
            type
          }
        }
      }
    }
  }
`;
