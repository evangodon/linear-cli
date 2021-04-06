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
    estimate
    description
    title
    number
    updatedAt
    parent {
      id
    }
    priority
    project {
      id
    }
    team {
      id
      states {
        nodes {
          id
          name
          type
          color
          position
        }
      }
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
