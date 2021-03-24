const gql = String.raw;

export const issueQuery = gql`
  query issue($id: String!) {
    issue(id: $id) {
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
      states {
        nodes {
          id
          name
        }
      }
    }
    id
    assignee {
      id
    }
    state {
      id
      name
    }
  }
`;
