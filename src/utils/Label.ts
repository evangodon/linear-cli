import chalk from 'chalk';
import { IssueLabel } from '../generated/_documents';

type Label = Pick<IssueLabel, 'name' | 'color'>;

export const Label = (label: Label) => {
  const bullet = chalk.hex(label.color)('•');

  return `${bullet}${label.name}`;
};
