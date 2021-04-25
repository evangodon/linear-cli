const gql = String.raw;

// TODO: don't include description by default
export const issueQuery = gql`
  query getIssue($id: String!, $withComments: Boolean!) {
    issue(id: $id) {
      history(first: 1) {
        nodes {
          actor {
            displayName
          }
          createdAt
        }
      }
      archivedAt
      comments @include(if: $withComments) {
        nodes {
          user {
            displayName
          }
          body
          createdAt
        }
      }
      trashed
      url
      identifier
      createdAt
      project {
        name
      }
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
