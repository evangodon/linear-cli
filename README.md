linear-cli
==========

CLI for Linear

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/linear-cli.svg)](https://npmjs.org/package/linear-cli)
[![Downloads/week](https://img.shields.io/npm/dw/linear-cli.svg)](https://npmjs.org/package/linear-cli)
[![License](https://img.shields.io/npm/l/linear-cli.svg)](https://github.com/egodon/linear-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g linear-cli
$ linear COMMAND
running command...
$ linear (-v|--version|version)
linear-cli/0.0.0 linux-x64 node-v15.6.0
$ linear --help [COMMAND]
USAGE
  $ linear COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`linear hello [FILE]`](#linear-hello-file)
* [`linear help [COMMAND]`](#linear-help-command)

## `linear hello [FILE]`

describe the command here

```
USAGE
  $ linear hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ linear hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/egodon/linear-cli/blob/v0.0.0/src/commands/hello.ts)_

## `linear help [COMMAND]`

display help for linear

```
USAGE
  $ linear help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
