import { LinearClient, Issue, User } from "@linear/sdk";

const gql = String.raw;

type Params = {
  user: User;
  linearClient: LinearClient;
};

export const assignedIssues = async ({ linearClient, user }: Params) => {
  const graphQLClient = linearClient.client;

  const nodes = await graphQLClient.rawRequest(
    gql`
      query user_assignedIssues(
        $id: String!
        $after: String
        $before: String
        $first: Int
        $includeArchived: Boolean
        $last: Int
        $orderBy: PaginationOrderBy
      ) {
        user(id: $id) {
          assignedIssues(
            after: $after
            before: $before
            first: $first
            includeArchived: $includeArchived
            last: $last
            orderBy: $orderBy
          ) {
            ...IssueConnection
          }
        }
      }
      fragment IssueConnection on IssueConnection {
        nodes {
          ...Issue
        }
        pageInfo {
          ...PageInfo
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
        }
      }
      fragment PageInfo on PageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    `,
    { id: user.id, first: 20 }
  );

  const issues: Issue[] = nodes.data.user.assignedIssues.nodes ?? [];

  return issues;
};
