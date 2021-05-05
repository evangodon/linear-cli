import chalk from 'chalk';
import { InvalidInputLinearError } from '@linear/sdk';

/**
 * @todo: handle linear errors and other types
 *
 * @param {Error} error - Error object
 */
export const handleError = (error: Error) => {
  if (error instanceof InvalidInputLinearError) {
    process.stderr.write(error.message);
    process.exit(1);
  }

  process.stderr.write(`\n${chalk.red('Error: ')} ${error.message}`);

  process.exit(1);
};
