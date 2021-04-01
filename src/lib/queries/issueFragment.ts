const gql = String.raw;

export const IssueConnectionFragment = gql`
  fragment IssueConnection on IssueConnection {
    nodes {
      ...Issue
    }
  }
  fragment Issue on Issue {
    trashed
    url
    identifier
    priorityLabel
    previousIdentifiers
    branchName
    cycle {
      id
    }
    dueDate
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
    archivedAt
    createdAt
    autoArchivedAt
    autoClosedAt
    canceledAt
    completedAt
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
`;
