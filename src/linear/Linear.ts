import { LinearClient, Issue } from "@linear/sdk";
import { issuesQuery } from "./queries/issues";
import { assignedIssuesQuery } from "./queries/assignedIssues";
import { issueQuery } from "./queries/issue";

/**
 * Custom Linear client
 */
export class Linear extends LinearClient {
  constructor() {
    super({ apiKey: global.linearApiKey });
  }

  async getIssues() {
    const { data } = await this.client.rawRequest(issuesQuery);

    const issues: Issue[] = data.issues.nodes ?? [];

    return issues;
  }

  async getMyAssignedIssues() {
    const user = await this.viewer;

    const { data } = await this.client.rawRequest(assignedIssuesQuery, {
      id: user.id,
      first: 20,
    });

    const issues: Issue[] = data.user.assignedIssues.nodes ?? [];

    return issues;
  }

  async getIssue(issueId: string) {
    const { data } = await this.client.rawRequest(issueQuery, {
      id: issueId,
    });

    return data.issue;
  }
}
