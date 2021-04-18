import Command, { flags } from '../../base';

export default class CacheShow extends Command {
  static description = 'Print the cache file';

  static flags = {
    pretty: flags.boolean({ char: 'p', description: 'Pretty print' }),
  };

  async run() {
    const { flags } = this.parse(CacheShow);
    const cache = this.cache.read();

    if (flags.pretty) {
      this.log(JSON.stringify(cache, null, 2));
      return;
    }

    this.log(JSON.stringify(cache));
  }
}
