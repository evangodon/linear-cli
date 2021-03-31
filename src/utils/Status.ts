import chalk from 'chalk';
import { WorkflowState } from '../generated/_documents';

type Status = Pick<WorkflowState, 'name' | 'color' | 'type'>;

const char = {
  complete: '✓',
  incomplete: '○',
};

/**
 * Renders a status from an issue
 *
 * @param {Status} - state
 * @returns {string} -  status
 */
export const Status = (state: Status) => {
  const box = chalk.hex(state.color)(
    state.type === 'completed' ? char.complete : char.incomplete
  );

  return `${box} ${state.name}`;
};
