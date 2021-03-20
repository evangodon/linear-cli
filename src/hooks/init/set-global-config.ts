import { Hook } from "@oclif/config";

declare global {
  namespace NodeJS {
    interface Global {
      config: any;
    }
  }
}

/**
 *
 * @param {any} opts - oclif options
 */
const hook: Hook<"init"> = async function (opts) {
  global.config = opts.config;
};

export default hook;
