import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const grammarRevision = process.env.COMMIT_HASH;
if (!/^[a-f0-9]{40}$/i.test(grammarRevision ?? '')) {
  throw new Error('COMMIT_HASH must be the full YDB grammar commit SHA');
}
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const output = mkdtempSync(join(tmpdir(), 'yql-antlr4ng-'));
try {
  execFileSync(process.execPath, [
    join(root, 'node_modules/antlr-ng/dist/cli/runner.js'),
    '-D', 'language=TypeScript', '-v', 'true', '-l', 'true',
    '-o', output, 'YQL.g4',
  ], {cwd: root, stdio: 'inherit'});
  for (const name of ['YQLLexer', 'YQLParser', 'YQLListener', 'YQLVisitor']) {
    const source = readFileSync(join(output, `${name}.ts`), 'utf8');
    writeFileSync(join(root, 'src', `${name}.ts`),
      `// Generated from YQL.g4 by antlr-ng@${pkg.devDependencies['antlr-ng']}; do not edit.\n` +
      source.replace(/^[\t ]+/gm, indent => indent.replaceAll('\t', '    '))
        .replace(/[\t ]+$/gm, '').trimEnd() + '\n');
  }
  const metadata = {
    grammarRepository: 'https://github.com/ydb-platform/ydb',
    grammarRevision: grammarRevision.toLowerCase(),
    grammarPath: 'yql/essentials/sql/v1/SQLv1Antlr4.g.in',
    grammarSha256: createHash('sha256').update(readFileSync(join(root, 'YQL.g4'))).digest('hex'),
    preprocessing: 'Repository Dockerfile: rename grammar and expand the three grammar templates; retain hidden comments.',
    generator: {name: 'antlr-ng', version: pkg.devDependencies['antlr-ng']},
    runtime: {name: 'antlr4ng', version: pkg.dependencies.antlr4ng},
  };
  writeFileSync(join(root, 'metadata.json'), JSON.stringify(metadata, null, 2) + '\n');
  writeFileSync(join(root, 'LICENSE'), readFileSync(join(root, '../../LICENSE')));
} finally {
  rmSync(output, {recursive: true, force: true});
}
