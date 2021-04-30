import * as Parser from '@oclif/parser';

export const issueArgs: Parser.args.Input = [
  { name: 'issueId', required: true },
  {
    name: 'issueIdOptional',
    hidden: true,
    description: 'Use this if you want to split the issue id into two arguments',
  },
];

export type IssueArgs = { issueId: string; issueIdOptional?: string };

type GetIssueId = (args: { issueId: string; issueIdOptional?: string }) => string;

export const getIssueId: GetIssueId = (args) => {
  const { issueId, issueIdOptional } = args;

  if (issueId.match(/^\d*$/)) {
    return `${global.currentWorkspace.defaultTeam}-${issueId}`;
  }

  if (issueIdOptional) {
    return `${args.issueId}-${args.issueIdOptional}`;
  }

  return issueId;
};
