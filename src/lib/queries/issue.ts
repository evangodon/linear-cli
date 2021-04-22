const gql = String.raw;

export const issueQuery = gql`
  query getIssue($id: String!) {
    issue(id: $id) {
      history(first: 1) {
        nodes {
          actor {
            displayName
          }
          createdAt
        }
      }
      trashed
      url
      identifier
      createdAt
      creator {
        id
        displayName
      }
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
            type
            color
            position
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
        type
        color
      }
    }
  }
`;
