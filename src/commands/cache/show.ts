import Command, { Flags } from '../../base';

export default class CacheShow extends Command {
  static description = 'Print the cache file';

  static flags = {
    pretty: Flags.boolean({ char: 'p', description: 'Pretty print' }),
  };

  async run() {
    const { flags } = await this.parse(CacheShow);
    const cache = await this.cache.read();

    if (flags.pretty) {
      this.log(JSON.stringify(cache, null, 2));
      return;
    }

    this.log(JSON.stringify(cache));
  }
}
