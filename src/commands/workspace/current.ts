import Command from '../../base';

export default class WorkspaceCurrent extends Command {
  static description = 'Print current workspace';

  async run() {
    this.log('');
    this.log(`Current workspace: ${this.configData.activeWorkspace}`);
  }
}
