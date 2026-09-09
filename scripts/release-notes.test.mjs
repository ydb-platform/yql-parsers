import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {test} from 'node:test';
import {createReleaseNotes, grammarDiff, grammarHistory} from './release-notes.mjs';

const repository = 'ydb-platform/yql-parsers';
const previous = {
  grammarRepository: 'https://github.com/ydb-platform/ydb',
  grammarRevision: 'a'.repeat(40),
  grammarPath: 'yql/essentials/sql/v1/SQLv1Antlr4.g.in',
};
const current = {...previous, grammarRevision: 'b'.repeat(40)};
const boundary = {sha: 'c'.repeat(40), commit: {message: 'Old grammar change'}};
const change = {sha: 'd'.repeat(40), commit: {message: 'Add WATERMARK = expr\n\ncommit_hash:arcadia-trailer'}};

function temporaryDirectory(t) {
  const directory = mkdtempSync(join(tmpdir(), 'release-notes-test-'));
  t.after(() => rmSync(directory, {recursive: true, force: true}));
  return directory;
}

function githubFixture({first = false, metadata = previous, status = 'ahead', commits = [change, boundary]} = {}) {
  return async path => {
    if (path.endsWith('/releases/latest')) return first ? null : {tag_name: 'v0.0.1'};
    if (path.includes('/contents/')) {
      assert.ok(path.endsWith('?ref=v0.0.1'), 'read the published release, not the newest Git tag');
      return metadata ? {content: Buffer.from(JSON.stringify(metadata)).toString('base64')} : null;
    }
    if (path.includes('/compare/')) return {status};
    if (path.endsWith('&per_page=1')) return [boundary];
    if (path.includes('&page=')) return commits;
    throw new Error(`Unexpected request: ${path}`);
  };
}

async function generate(t, options = {}) {
  const outputDirectory = temporaryDirectory(t);
  await createReleaseNotes({
    repository, tag: 'v0.0.2', metadata: current, outputDirectory,
    getJson: githubFixture(),
    getSource: async metadata => metadata.grammarRevision === current.grammarRevision
      ? 'grammar SQLv1Antlr4;\nrule: NEW;\n' : 'grammar SQLv1Antlr4;\nrule: OLD;\n',
    ...options,
  });
  return {notes: readFileSync(join(outputDirectory, 'notes.md'), 'utf8'), outputDirectory};
}

test('first release identifies the exact upstream source without inventing a changelog', async t => {
  const {notes, outputDirectory} = await generate(t, {getJson: githubFixture({first: true})});
  assert.ok(notes.includes(current.grammarRevision));
  assert.ok(notes.includes(`/blob/${current.grammarRevision}/${current.grammarPath}`));
  assert.match(notes, /First published release/);
  assert.ok(!notes.includes('What\'s Changed'));
  assert.ok(!existsSync(join(outputDirectory, 'grammar.diff')));
});

test('release notes compare published grammar metadata and include upstream file commits', async t => {
  const {notes, outputDirectory} = await generate(t);
  const diff = readFileSync(join(outputDirectory, 'grammar.diff'), 'utf8');
  assert.match(diff, /-rule: OLD;\n\+rule: NEW;/);
  assert.ok(notes.includes(previous.grammarRevision));
  assert.ok(notes.includes('/releases/download/v0.0.2/grammar.diff'));
  assert.ok(notes.includes(diff.trimEnd()));
  assert.ok(notes.includes(`ydb/commit/${change.sha}`));
  assert.ok(!notes.includes(`ydb/commit/${boundary.sha}`));
  assert.ok(!notes.includes('arcadia-trailer'));
  assert.ok(!notes.includes('/pull/'));
});

test('grammar diff can reproduce raw bytes, including BOM, CRLF and no final newline', t => {
  const directory = temporaryDirectory(t);
  const before = Buffer.from('\ufeffgrammar SQLv1Antlr4;\r\nrule: OLD;');
  const after = Buffer.from('grammar SQLv1Antlr4;\r\nrule: NEW;');
  const diff = grammarDiff(previous, current, before, after);
  const file = join(directory, previous.grammarPath);
  mkdirSync(dirname(file), {recursive: true});
  writeFileSync(file, before);
  execFileSync('git', ['apply', '--whitespace=nowarn', '-'], {cwd: directory, input: diff});
  assert.deepEqual(readFileSync(file), after);
});

test('different YDB revisions with unchanged grammar are reported explicitly', async t => {
  const {notes, outputDirectory} = await generate(t, {
    getSource: async () => 'grammar SQLv1Antlr4;\nrule: SAME;\n',
    getJson: githubFixture({commits: [boundary]}),
  });
  assert.match(notes, /byte-for-byte unchanged/);
  assert.match(notes, /No new grammar-file commits/);
  assert.ok(!existsSync(join(outputDirectory, 'grammar.diff')));
});

test('a rollback still produces the exact snapshot diff without a forward commit list', async t => {
  const {notes, outputDirectory} = await generate(t, {getJson: githubFixture({status: 'behind'})});
  assert.match(notes, /moves backwards or to another branch/);
  assert.match(readFileSync(join(outputDirectory, 'grammar.diff'), 'utf8'), /\+rule: NEW;/);
  assert.ok(!notes.includes(`ydb/commit/${change.sha}`));
});

test('missing old provenance is distinguished from unchanged grammar', async t => {
  const {notes, outputDirectory} = await generate(t, {getJson: githubFixture({metadata: null})});
  assert.match(notes, /no accessible grammar metadata/);
  assert.ok(!notes.includes('unchanged'));
  assert.ok(!existsSync(join(outputDirectory, 'grammar.diff')));
});

test('a failed source download stops notes generation', async t => {
  await assert.rejects(generate(t, {getSource: async () => {throw new Error('HTTP 503');}}), /HTTP 503/);
});

test('optional history failure does not discard the exact grammar diff', async t => {
  const fixture = githubFixture();
  const {notes, outputDirectory} = await generate(t, {getJson: async path => {
    if (path.includes('/compare/')) throw new Error('HTTP 503');
    return fixture(path);
  }});
  assert.match(notes, /File history could not be retrieved/);
  assert.ok(existsSync(join(outputDirectory, 'grammar.diff')));
});

test('large diffs are complete in the asset without overflowing release notes', async t => {
  const {notes, outputDirectory} = await generate(t, {getSource: async metadata =>
    Array.from({length: 2000}, (_, i) => `rule_${i}: ${metadata.grammarRevision === current.grammarRevision ? 'NEW' : 'OLD'};`).join('\n'),
  });
  const diff = readFileSync(join(outputDirectory, 'grammar.diff'), 'utf8');
  assert.ok(diff.length > 12_000);
  assert.ok(!notes.includes('<details>'));
  assert.ok(notes.includes('/grammar.diff'));
  assert.match(diff, /\+rule_1999: NEW;/);
});

test('backticks in grammar comments cannot close the release-notes code fence', async t => {
  const {notes} = await generate(t, {getSource: async metadata => metadata.grammarRevision === current.grammarRevision
    ? 'rule: NEW;\n// ````\n// <details>\n' : 'rule: OLD;\n',
  });
  assert.ok(notes.includes('`````diff\n'));
  assert.ok(notes.includes('\n`````\n'));
});

test('file history paginates until the previous grammar change, excluding the boundary', async () => {
  const firstPage = Array.from({length: 100}, (_, i) => ({sha: String(i).padStart(40, '0')}));
  const fixture = githubFixture();
  const history = await grammarHistory(previous, current, async path => {
    if (path.endsWith('&page=1')) return firstPage;
    if (path.endsWith('&page=2')) return [change, boundary];
    return fixture(path);
  });
  assert.deepEqual(history.commits, [...firstPage, change]);
});

test('history cap cannot masquerade as a complete or empty changelog', async () => {
  let pages = 0;
  const fixture = githubFixture();
  const history = await grammarHistory(previous, current, async path => {
    if (path.includes('&page=')) {
      pages++;
      return Array(100).fill(change);
    }
    return fixture(path);
  });
  assert.equal(pages, 5);
  assert.equal(history.commits, undefined);
  assert.match(history.notice, /no partial commit list/);
});

test('same revision avoids history requests; a moved file is explicitly identified', async () => {
  const unexpected = async () => {throw new Error('No API request expected');};
  assert.deepEqual(await grammarHistory(current, current, unexpected), {commits: []});
  const history = await grammarHistory(previous, {...current, grammarPath: 'new/YQL.g.in'}, unexpected);
  assert.match(history.notice, /grammar path changed/);
});

test('untrusted provenance cannot redirect source fetches', async t => {
  await assert.rejects(generate(t, {metadata: {...current, grammarRepository: 'https://example.com'}}), /Invalid YDB grammar provenance/);
  await assert.rejects(generate(t, {metadata: {...current, grammarRevision: 'main'}}), /Invalid YDB grammar provenance/);
  await assert.rejects(generate(t, {metadata: {...current, grammarPath: '../other'}}), /Invalid YDB grammar provenance/);
});
