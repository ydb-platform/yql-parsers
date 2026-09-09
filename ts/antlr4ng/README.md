# YQL parser for antlr4ng

A generated YQL lexer/parser with ESM JavaScript and NodeNext TypeScript declarations.
Packages are attached to [GitHub Releases](https://github.com/ydb-platform/yql-parsers/releases);
publication to an npm registry is not required.

## Install

Download `ydb-platform-yql-parser-<version>.tgz` from a release, then run:

```sh
npm install ./ydb-platform-yql-parser-<version>.tgz
```

Alternatively, pass the exact versioned release asset URL to `npm install`.
Commit the resulting lockfile and use `npm ci` for reproducible installations.
The `antlr4ng` runtime dependency is still fetched from the configured npm registry.

## Use

```js
import {CharStream, CommonTokenStream} from 'antlr4ng';
import {YQLLexer, YQLParser} from '@ydb-platform/yql-parser';

const lexer = new YQLLexer(CharStream.fromString('SELECT 1;'));
const parser = new YQLParser(new CommonTokenStream(lexer));
const tree = parser.sql_query();
```

Use error listeners on both lexer and parser to detect invalid input: ANTLR's
normal recovery can still return a tree after a syntax error. Grammar acceptance
does not check schema, types, execution or query equivalence on a target YDB.

For highlighting, import `YQLLexer` from `@ydb-platform/yql-parser/lexer` to avoid
loading the parser. Comments remain on the hidden channel. Token offsets count
Unicode code points, not JavaScript UTF-16 code units.

The generated classes expose the ATN, token vocabulary and rules required by
`antlr4-c3`. The package tests exercise `new CodeCompletionCore(parser).collectCandidates(...)`;
application-specific completion rules are outside this package.

## Sources and provenance

`src/`, `YQL.g4`, `metadata.json` and the Apache-2.0 license are included in the
tarball, so consumers can continue vendoring generated sources. `metadata.json`
records the exact YDB grammar commit, prepared grammar SHA-256, preprocessing,
generator and runtime versions. The release tag identifies the corresponding
`yql-parsers` commit; the package version is independent of the YDB version.

The original `ts/*.ts` files continue to target `antlr4`; this package uses
separately generated `antlr4ng` output. Normal package installation neither
regenerates nor compiles the parser.

## Develop

From the repository root, with Node.js 22 and Docker:

```sh
npm ci --prefix ts/antlr4ng
make ts-ng
npm test --prefix ts/antlr4ng
npm pack ./ts/antlr4ng
```

`make ts-ng COMMIT_HASH=<full-YDB-commit-SHA>` uses the same Docker-prepared grammar
as all other language targets. The generation script normalizes indentation and
trailing whitespace in generated TypeScript without modifying the grammar. Commit the regenerated files with the updated
Makefile revision. `npm test` installs a real tarball into a temporary consumer
and checks parsing, highlighting, autocomplete, NodeNext types and browser bundling.
