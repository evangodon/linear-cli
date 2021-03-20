import { LinearClient, Issue } from "@linear/sdk";

const gql = String.raw;

export const getIssues = async (linearClient: LinearClient) => {
  const graphQLClient = linearClient.client;

  const nodes = await graphQLClient.rawRequest(
    gql`
      query issues(
        $after: String
        $before: String
        $first: Int
        $includeArchived: Boolean
        $last: Int
        $orderBy: PaginationOrderBy
      ) {
        issues(
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
    `
  );

  const issues: Issue[] = nodes.data.issues.nodes ?? [];

  return issues;
};
