const gql = String.raw;

export const IssueConnectionFragment = gql`
  fragment IssueConnection on IssueConnection {
    nodes {
      ...Issue
    }
  }
  fragment Issue on Issue {
    url
    identifier
    title
    createdAt
    updatedAt
    parent {
      id
    }
    priority
    priorityLabel
    project {
      id
    }
    team {
      id
      key
    }
    id
    assignee {
      id
      displayName
    }
    state {
      id
      name
      color
      type
    }
    labels {
      nodes {
        id
        name
        color
      }
    }
  }
`;
