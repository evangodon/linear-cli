const gql = String.raw;

export const issueQuery = gql`
  query getIssue($id: String!) {
    issue(id: $id) {
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
      labels {
        nodes {
          name
          color
        }
      }
      parent {
        id
      }
      priority
      project {
        id
      }
      team {
        id
        name
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
        name
        displayName
      }
      state {
        id
        name
      }
    }
  }
`;
