import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {runInNewContext} from 'node:vm';
import {after, before, test} from 'node:test';
import {CodeCompletionCore} from 'antlr4-c3';
import {build} from 'esbuild';

const root = fileURLToPath(new URL('../', import.meta.url));
const consumer = mkdtempSync(join(tmpdir(), 'yql-package-consumer-'));
const installed = join(consumer, 'node_modules/@ydb-platform/yql-parser');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
let api;
let runtime;

before(async () => {
  // Test the same packed artifact users download, without workspace symlinks or dev dependencies.
  execFileSync('npm', ['pack', '--pack-destination', consumer], {cwd: root, stdio: 'pipe'});
  writeFileSync(join(consumer, 'package.json'), JSON.stringify({private: true, type: 'module'}));
  const tarball = join(consumer, `ydb-platform-yql-parser-${pkg.version}.tgz`);
  execFileSync('npm', ['install', tarball, '--ignore-scripts', '--no-audit', '--no-fund'], {
    cwd: consumer, stdio: 'pipe',
  });
  api = await import(pathToFileURL(join(installed, 'dist/index.js')));
  runtime = await import(pathToFileURL(join(consumer, 'node_modules/antlr4ng/dist/index.mjs')));
});
after(() => rmSync(consumer, {recursive: true, force: true}));

function parse(sql) {
  const errors = [];
  const listener = new class extends runtime.BaseErrorListener {
    syntaxError(_recognizer, _symbol, line, column, message) {
      errors.push({line, column, message});
    }
  }();
  const lexer = new api.YQLLexer(runtime.CharStream.fromString(sql));
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  const tokens = new runtime.CommonTokenStream(lexer);
  const parser = new api.YQLParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.sql_query();
  return {errors, tokens, parser};
}

test('parses YQL and rejects incomplete, invalid and trailing input', () => {
  assert.deepEqual(parse('$q = (SELECT 1 AS id); SELECT * FROM $q;').errors, []);
  for (const sql of ['SELECT', 'SELECT FROM;', 'SELECT 1; garbage', 'SELECT 1; @']) {
    assert.ok(parse(sql).errors.length > 0, sql);
  }
});

test('preserves hidden comments and Unicode token text', () => {
  const sql = "-- Привет 👋\r\nSELECT '🚀' AS value; /* конец */";
  const {errors, tokens} = parse(sql);
  assert.deepEqual(errors, []);
  tokens.fill();
  const comments = tokens.getTokens().filter(token => token.channel === runtime.Token.HIDDEN_CHANNEL);
  assert.ok(comments.some(token => token.text === '-- Привет 👋\r\n'));
  assert.ok(comments.some(token => token.text === '/* конец */'));
  const literal = tokens.getTokens().find(token => token.text === "'🚀'");
  assert.equal(literal.line, 2);
  assert.equal(literal.column, 7);
});

test('exposes ATN and rule metadata to antlr4-c3', () => {
  const {parser} = parse('SELECT ');
  const candidates = new CodeCompletionCore(parser).collectCandidates(2);
  assert.ok(candidates.tokens.size > 0);
  assert.ok(parser.ruleNames.includes('sql_query'));
});

test('installs usable NodeNext declarations and public exports', () => {
  writeFileSync(join(consumer, 'index.ts'), `
    import {YQLLexer, YQLParser, YQLListener, YQLVisitor} from '@ydb-platform/yql-parser';
    import {YQLLexer as LexerOnly} from '@ydb-platform/yql-parser/lexer';
    import {YQLParser as ParserOnly} from '@ydb-platform/yql-parser/parser';
    import {CharStream, CommonTokenStream} from 'antlr4ng';
    const parser: ParserOnly = new YQLParser(new CommonTokenStream(new LexerOnly(CharStream.fromString('SELECT 1;'))));
    const listener: YQLListener = new YQLListener();
    const visitor: YQLVisitor<void> = new YQLVisitor<void>();
    parser.addParseListener(listener);
    visitor.visit(parser.sql_query());
    console.log(YQLLexer.SELECT);
  `);
  execFileSync(process.execPath, [join(root, 'node_modules/typescript/bin/tsc'),
    '--module', 'NodeNext', '--moduleResolution', 'NodeNext', '--target', 'ES2022',
    '--strict', '--noEmit', 'index.ts'], {cwd: consumer, stdio: 'pipe'});
  execFileSync(process.execPath, ['--input-type=module', '-e', `
    import {YQLLexer} from '@ydb-platform/yql-parser/lexer';
    import {YQLParser} from '@ydb-platform/yql-parser/parser';
    if (!YQLLexer || !YQLParser) throw new Error('Missing public export');
  `], {cwd: consumer, stdio: 'pipe'});
});

test('bundles and runs in a browser environment, with a lexer-only entry point', async () => {
  for (const lexerOnly of [true, false]) {
    writeFileSync(join(consumer, 'browser.ts'), `
      import {CharStream, CommonTokenStream} from 'antlr4ng';
      import {YQLLexer${lexerOnly ? '' : ', YQLParser'}} from '@ydb-platform/yql-parser${lexerOnly ? '/lexer' : ''}';
      const tokens = new CommonTokenStream(new YQLLexer(CharStream.fromString('SELECT 1;')));
      tokens.fill();
      ${lexerOnly ? '' : 'new YQLParser(tokens).sql_query();'}
      export const result = tokens.getTokens()[0].text;
    `);
    const bundle = await build({entryPoints: [join(consumer, 'browser.ts')], bundle: true,
      platform: 'browser', format: 'iife', globalName: 'YqlTest', write: false, metafile: true});
    const context = {};
    runInNewContext(bundle.outputFiles[0].text, context);
    assert.equal(context.YqlTest.result, 'SELECT');
    if (lexerOnly) {
      assert.ok(!Object.keys(bundle.metafile.inputs).some(path => path.endsWith('YQLParser.js')));
    }
  }
});

test('ships generated sources, grammar, license and verifiable provenance', () => {
  for (const file of ['src/YQLLexer.ts', 'src/YQLParser.ts', 'src/YQLListener.ts', 'src/YQLVisitor.ts', 'LICENSE']) {
    assert.ok(readFileSync(join(installed, file)).length > 0);
  }
  const metadata = JSON.parse(readFileSync(join(installed, 'metadata.json'), 'utf8'));
  assert.match(metadata.grammarRevision, /^[a-f0-9]{40}$/);
  assert.equal(metadata.runtime.version, pkg.dependencies.antlr4ng);
  assert.equal(metadata.generator.version, pkg.devDependencies['antlr-ng']);
  assert.equal(metadata.grammarSha256,
    createHash('sha256').update(readFileSync(join(installed, 'YQL.g4'))).digest('hex'));
  const installedPackage = JSON.parse(readFileSync(join(installed, 'package.json'), 'utf8'));
  assert.equal(installedPackage.version, pkg.version);
});
