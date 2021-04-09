const gql = String.raw;

export const issueWorkflowStatesQuery = gql`
  query getIssueWorkflowStates($id: String!) {
    issue(id: $id) {
      identifier
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
