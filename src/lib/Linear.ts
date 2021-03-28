import { LinearClient } from "@linear/sdk";
import { cli } from "cli-ux";
import { issuesQuery } from "./queries/issues";
import { assignedIssuesQuery } from "./queries/assignedIssues";
import { issueQuery } from "./queries/issue";
import { handleError } from "./handleError";
import {
  IssuesQuery,
  IssuesQueryVariables,
  User_AssignedIssuesQuery,
  User_AssignedIssuesQueryVariables,
  GetIssueQuery,
  GetIssueQueryVariables,
} from "../generated/_documents";

/**
 * Custom Linear client
 */
export class Linear extends LinearClient {
  constructor(apiKey: string) {
    super({ apiKey });
  }

  async getIssues() {
    let issues: IssuesQuery["issues"]["nodes"] = [];

    cli.action.start("Fetching your assigned issues...");

    try {
      const { data } = await this.client.rawRequest<
        IssuesQuery,
        IssuesQueryVariables
      >(issuesQuery);

      if (!data) {
        throw new Error("No data returned from Linear");
      }

      issues = data.issues.nodes;
    } catch (error) {
      handleError(error);
    } finally {
      cli.action.stop();
    }

    return issues;
  }

  async getMyAssignedIssues() {
    const user = await this.viewer;

    if (!user?.id) {
      throw new Error("Failed to get user data from Linear");
    }

    let issues: User_AssignedIssuesQuery["user"]["assignedIssues"]["nodes"] = [];

    try {
      const { data } = await this.client.rawRequest<
        User_AssignedIssuesQuery,
        User_AssignedIssuesQueryVariables
      >(assignedIssuesQuery, {
        id: user.id,
        first: 20,
      });

      if (!data) {
        throw new Error("No data returned from Linear");
      }

      issues = data.user.assignedIssues.nodes ?? [];
    } catch (error) {
      handleError(error);
    }

    return issues;
  }

  async getIssue(issueId: string) {
    let issue: GetIssueQuery["issue"] = (null as unknown) as GetIssueQuery["issue"];

    try {
      const { data } = await this.client.rawRequest<
        GetIssueQuery,
        GetIssueQueryVariables
      >(issueQuery, {
        id: issueId,
      });

      if (!data) {
        throw new Error("No data returned from Linear");
      }

      issue = data.issue;
    } catch (error) {
      handleError(error);
    }

    return issue;
  }
}
