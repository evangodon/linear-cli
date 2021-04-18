const gql = String.raw;

/** Get team states */
export const teamWorkflowStatesQuery = gql`
  query teamWorkflowStates {
    teams {
      nodes {
        id
        name
        key
        states {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;
