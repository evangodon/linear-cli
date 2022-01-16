import chalk from 'chalk';
import { WorkflowState } from '../generated/_documents';

type Status = Pick<WorkflowState, 'name' | 'color' | 'type'>;

const char: { [key: string]: string } = {
  triage: '↔',
  backlog: '◌',
  unstarted: '○',
  started: '◑',
  completed: '✓',
  canceled: '⍉',
};

/**
 * Renders a status from an issue
 *
 * @param {Status} - state
 * @returns {string} -  status
 */
export const Status = (state: Status) => {
  const box = chalk.hex(state.color)(char[state.type]);

  return `${box} ${state.name}`;
};
