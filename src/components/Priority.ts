import chalk from 'chalk';

const priorityLevel: { [key: number]: string } = {
  0: chalk.dim('—'),
  1: `${chalk.red('!!!')} Urgent`,
  2: `■■■ High`,
  3: `■■☐ Medium`,
  4: `■☐☐ Low`,
};

/**
 * Renders the priority of an issue
 *
 * @param {Status} - state
 * @returns {string} -  status
 */
export const Priority = (priority: number) => {
  return priorityLevel[priority] ?? '';
};
