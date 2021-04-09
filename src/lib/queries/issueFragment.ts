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
    updatedAt
    parent {
      id
    }
    priority
    project {
      id
      name
    }
    team {
      id
    }
    id
    assignee {
      id
      displayName
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
