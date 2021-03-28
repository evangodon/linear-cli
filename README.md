linear-cli
==========

An unoffical CLI for [Linear](https://linear.app/)

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
$ npm install -g @egodon/lr
$ lnr COMMAND
running command...
$ lnr (-v|--version|version)
@egodon/lr/0.1.0 linux-x64 node-v15.6.0
$ lnr --help [COMMAND]
USAGE
  $ lnr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lnr config:delete`](#lnr-configdelete)
* [`lnr config:show`](#lnr-configshow)
* [`lnr help [COMMAND]`](#lnr-help-command)
* [`lnr init`](#lnr-init)
* [`lnr issue:create`](#lnr-issuecreate)
* [`lnr issue:info [ISSUEID]`](#lnr-issueinfo-issueid)
* [`lnr issue:list`](#lnr-issuelist)
* [`lnr issue:update ISSUEID`](#lnr-issueupdate-issueid)
* [`lnr myissues:list`](#lnr-myissueslist)
* [`lnr workspace:add`](#lnr-workspaceadd)
* [`lnr workspace:switch [FILE]`](#lnr-workspaceswitch-file)

## `lnr config:delete`

```
USAGE
  $ lnr config:delete
```

_See code: [src/commands/config/delete.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/config/delete.ts)_

## `lnr config:show`

```
USAGE
  $ lnr config:show
```

_See code: [src/commands/config/show.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/config/show.ts)_

## `lnr help [COMMAND]`

display help for lnr

```
USAGE
  $ lnr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `lnr init`

```
USAGE
  $ lnr init
```

_See code: [src/commands/init.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/init.ts)_

## `lnr issue:create`

Create a new issue

```
USAGE
  $ lnr issue:create
```

_See code: [src/commands/issue/create.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/issue/create.ts)_

## `lnr issue:info [ISSUEID]`

Show description of issue

```
USAGE
  $ lnr issue:info [ISSUEID]
```

_See code: [src/commands/issue/info.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/issue/info.ts)_

## `lnr issue:list`

List issues

```
USAGE
  $ lnr issue:list
```

_See code: [src/commands/issue/list.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/issue/list.ts)_

## `lnr issue:update ISSUEID`

Update an issue

```
USAGE
  $ lnr issue:update ISSUEID

OPTIONS
  -s, --status  Update issue status
```

_See code: [src/commands/issue/update.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/issue/update.ts)_

## `lnr myissues:list`

List issues assigned to you

```
USAGE
  $ lnr myissues:list

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ lnr myissues
  $ lnr mi
```

_See code: [src/commands/myissues/list.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/myissues/list.ts)_

## `lnr workspace:add`

Add a new workplace

```
USAGE
  $ lnr workspace:add
```

_See code: [src/commands/workspace/add.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/workspace/add.ts)_

## `lnr workspace:switch [FILE]`

describe the command here

```
USAGE
  $ lnr workspace:switch [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/workspace/switch.ts](https://github.com/egodon/linear-cli/blob/v0.1.0/src/commands/workspace/switch.ts)_
<!-- commandsstop -->
