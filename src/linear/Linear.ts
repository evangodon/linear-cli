import { LinearClient, Issue } from "@linear/sdk";
import { issuesQuery } from "./queries/issues";
import { assignedIssuesQuery } from "./queries/assignedIssues";

/**
 * Extended Linear client
 */
export class Linear extends LinearClient {
  constructor() {
    super({ apiKey: global.linearApiKey });
  }

  async getIssues() {
    const nodes = await this.client.rawRequest(issuesQuery);

    const issues: Issue[] = nodes.data.issues.nodes ?? [];

    return issues;
  }

  async getMyAssignedIssues() {
    const user = await this.viewer;

    const nodes = await this.client.rawRequest(assignedIssuesQuery, {
      id: user.id,
      first: 20,
    });

    const issues: Issue[] = nodes.data.user.assignedIssues.nodes ?? [];

    return issues;
  }

  async getIssue() {
    const issue = await this.issue("LIN-1");

    const state = await issue?.state;

    console.log(state);
    return issue;
  }
}
