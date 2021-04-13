# Linear CLI

A CLI for [Linear](https://linear.app/)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@evangodon/lr.svg)](https://npmjs.org/package/@evangodon/lr)
[![Downloads/week](https://img.shields.io/npm/dw/@evangodon/lr.svg)](https://npmjs.org/package/@evangodon/lr)
[![License](https://img.shields.io/npm/l/linear-cli.svg)](https://github.com/egodon/linear-cli/blob/master/package.json)


<!-- toc -->
* [Linear CLI](#linear-cli)
* [Install](#install)
* [Commands](#commands)
<!-- tocstop -->

# Install

```
  $ npm install -g @evangodon/lr
  # or
  $ yarn global add @evangodon/lr

  # and then setup your personal api key
  $ lr init
```

# Commands

<!-- commands -->
* [`lr config:delete`](#lr-configdelete)
* [`lr config:show`](#lr-configshow)
* [`lr help [COMMAND]`](#lr-help-command)
* [`lr init`](#lr-init)
* [`lr issue ISSUEID`](#lr-issue-issueid)
* [`lr issue:create`](#lr-issuecreate)
* [`lr issue:list`](#lr-issuelist)
* [`lr issue:start ISSUEID`](#lr-issuestart-issueid)
* [`lr issue:update ISSUEID [PROPERTYTOMODIFY]`](#lr-issueupdate-issueid-propertytomodify)
* [`lr workspace:add`](#lr-workspaceadd)
* [`lr workspace:switch`](#lr-workspaceswitch)

## `lr config:delete`

```
USAGE
  $ lr config:delete
```

_See code: [src/commands/config/delete.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/config/delete.ts)_

## `lr config:show`

```
USAGE
  $ lr config:show
```

_See code: [src/commands/config/show.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/config/show.ts)_

## `lr help [COMMAND]`

display help for lr

```
USAGE
  $ lr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `lr init`

Setup the Linear cli

```
USAGE
  $ lr init
```

_See code: [src/commands/init.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/init.ts)_

## `lr issue ISSUEID`

Show issue info

```
USAGE
  $ lr issue ISSUEID

OPTIONS
  -d, --description  Show issue description
  -o, --open         Open issue in web browser

ALIASES
  $ lr i
  $ lr issue:show
```

_See code: [src/commands/issue/index.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/issue/index.ts)_

## `lr issue:create`

Create a new issue

```
USAGE
  $ lr issue:create

OPTIONS
  -c, --copy  Copy issue url to clipboard after creating

ALIASES
  $ lr create
  $ lr c
```

_See code: [src/commands/issue/create.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/issue/create.ts)_

## `lr issue:list`

List issues

```
USAGE
  $ lr issue:list

OPTIONS
  -a, --all                                            List issues from all teams
  -m, --mine                                           Only show issues assigned to me

  -s, --sort=identifier|status|title|assignee|project  [default: -status] property to sort by (prepend '-' for
                                                       descending)

  -t, --team=team                                      List issues from another team

  -x, --extended                                       show extra columns

  --columns=identifier|status|title|assignee|project   only show provided columns (comma-separated)

  --csv                                                output is csv format [alias: --output=csv]

  --filter=filter                                      filter property by partial string matching, ex: name=foo

  --no-header                                          hide table header from output

  --no-truncate                                        do not truncate output to fit screen

  --output=csv|json|yaml                               output in a more machine friendly format

ALIASES
  $ lr list
  $ lr ls
  $ lr l
```

_See code: [src/commands/issue/list.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/issue/list.ts)_

## `lr issue:start ISSUEID`

Change status of issue to "In progress" and assign to yourself.

```
USAGE
  $ lr issue:start ISSUEID

ALIASES
  $ lr start
  $ lr s
```

_See code: [src/commands/issue/start.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/issue/start.ts)_

## `lr issue:update ISSUEID [PROPERTYTOMODIFY]`

Update an issue

```
USAGE
  $ lr issue:update ISSUEID [PROPERTYTOMODIFY]

ARGUMENTS
  ISSUEID
  PROPERTYTOMODIFY  (title|description|status) Property to update

ALIASES
  $ lr update
  $ lr u
```

_See code: [src/commands/issue/update.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/issue/update.ts)_

## `lr workspace:add`

Add a new workplace

```
USAGE
  $ lr workspace:add
```

_See code: [src/commands/workspace/add.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/workspace/add.ts)_

## `lr workspace:switch`

Switch to another workspace

```
USAGE
  $ lr workspace:switch
```

_See code: [src/commands/workspace/switch.ts](https://github.com/evangodon/linear-cli/blob/v0.9.1/src/commands/workspace/switch.ts)_
<!-- commandsstop -->
