import {execFileSync} from 'node:child_process';
import {mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';

const upstream = 'ydb-platform/ydb';
const metadataPath = 'ts/antlr4ng/metadata.json';
const historyPageLimit = 5;

function validateMetadata(metadata) {
  if (metadata.grammarRepository !== `https://github.com/${upstream}` ||
      !/^[a-f0-9]{40}$/i.test(metadata.grammarRevision ?? '') ||
      !/^[\w./-]+$/.test(metadata.grammarPath ?? '') ||
      metadata.grammarPath.split('/').some(part => !part || part === '..')) {
    throw new Error('Invalid YDB grammar provenance');
  }
  return metadata;
}

function grammarUrl(metadata, raw = false) {
  const path = metadata.grammarPath.split('/').map(encodeURIComponent).join('/');
  return raw
    ? `https://raw.githubusercontent.com/${upstream}/${metadata.grammarRevision}/${path}`
    : `https://github.com/${upstream}/blob/${metadata.grammarRevision}/${path}`;
}

async function githubJson(path, optional = false) {
  const token = process.env.GH_TOKEN;
  const response = await fetch(`https://api.github.com/${path}`, {
    headers: {Accept: 'application/vnd.github+json', ...(token ? {Authorization: `Bearer ${token}`} : {})},
    signal: AbortSignal.timeout(30_000),
  });
  if (optional && response.status === 404) return null;
  if (!response.ok) throw new Error(`GitHub API returned HTTP ${response.status} for ${path}`);
  return response.json();
}

async function grammarSource(metadata) {
  const response = await fetch(grammarUrl(metadata, true), {signal: AbortSignal.timeout(30_000)});
  if (!response.ok) throw new Error(`Cannot download grammar at ${metadata.grammarRevision}: HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}

export function grammarDiff(previous, current, before, after) {
  const directory = mkdtempSync(join(tmpdir(), 'yql-grammar-diff-'));
  try {
    const oldFile = join(directory, 'before');
    const newFile = join(directory, 'after');
    writeFileSync(oldFile, before);
    writeFileSync(newFile, after);
    try {
      return execFileSync('diff', [
        '-u', '-L', `a/${previous.grammarPath}`, '-L', `b/${current.grammarPath}`, oldFile, newFile,
      ], {encoding: 'utf8', maxBuffer: 16 * 1024 * 1024});
    } catch (error) {
      // diff exits with 1 for differences and >1 for execution errors.
      if (error.status === 1) return error.stdout;
      throw error;
    }
  } finally {
    rmSync(directory, {recursive: true, force: true});
  }
}

export async function grammarHistory(previous, current, getJson = githubJson) {
  if (previous.grammarRevision === current.grammarRevision) return {commits: []};
  if (previous.grammarPath !== current.grammarPath) {
    return {notice: 'The grammar path changed; use the attached snapshot diff.'};
  }
  try {
    const comparison = await getJson(`repos/${upstream}/compare/${previous.grammarRevision}...${current.grammarRevision}?per_page=1`);
    if (comparison.status !== 'ahead') {
      return {notice: 'The YDB revision moves backwards or to another branch; the attached diff compares the two snapshots directly.'};
    }
    const historyPath = `repos/${upstream}/commits?path=${encodeURIComponent(current.grammarPath)}`;
    const [boundary] = await getJson(`${historyPath}&sha=${previous.grammarRevision}&per_page=1`);
    if (!boundary) return {notice: 'The previous grammar history is unavailable; use the attached snapshot diff.'};
    const commits = [];
    for (let page = 1; page <= historyPageLimit; page++) {
      const batch = await getJson(`${historyPath}&sha=${current.grammarRevision}&per_page=100&page=${page}`);
      const index = batch.findIndex(commit => commit.sha === boundary.sha);
      if (index !== -1) return {commits: commits.concat(batch.slice(0, index))};
      commits.push(...batch);
      if (batch.length < 100) break;
    }
    return {notice: 'The previous history boundary was not found within 500 file commits. The snapshot diff is complete; no partial commit list is presented.'};
  } catch (error) {
    return {notice: `File history could not be retrieved (${error.message}). The snapshot diff is still complete.`};
  }
}

function escapeMarkdown(text) {
  return text.replace(/[&<>]/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'}[character]))
    .replace(/[\\`*_{}[\]()#!|]/g, '\\$&');
}

export async function createReleaseNotes({
  repository, tag, metadata, outputDirectory = 'release', getJson = githubJson, getSource = grammarSource,
}) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository ?? '') || !/^v?\d+\.\d+\.\d+$/.test(tag ?? '')) {
    throw new Error('Repository and stable release tag are required');
  }
  const current = validateMetadata(metadata);
  const releaseUrl = `https://github.com/${repository}/releases`;
  const source = await getSource(current);
  // A tag from a failed publication is not a previous published release.
  const previousRelease = await getJson(`repos/${repository}/releases/latest`, true);
  const notes = [
    '## YDB grammar', '',
    `- YDB commit: [\`${current.grammarRevision}\`](https://github.com/${upstream}/commit/${current.grammarRevision}).`,
    `- Source: [\`${current.grammarPath}\`](${grammarUrl(current)}).`,
    '- The diff compares the original ANTLR4 grammar template, before parser-generation preprocessing.', '',
  ];
  mkdirSync(outputDirectory, {recursive: true});
  const diffPath = join(outputDirectory, 'grammar.diff');
  rmSync(diffPath, {force: true});
  if (!previousRelease) {
    notes.push('First published release: there is no previous grammar to compare.');
  } else {
    const previousTag = previousRelease.tag_name;
    notes.push(`Previous release: [${escapeMarkdown(previousTag)}](${releaseUrl}/tag/${encodeURIComponent(previousTag)}).`, '');
    const file = await getJson(`repos/${repository}/contents/${metadataPath}?ref=${encodeURIComponent(previousTag)}`, true);
    if (!file) {
      notes.push('The previous release has no accessible grammar metadata; no grammar comparison was produced.');
    } else {
      const previous = validateMetadata(JSON.parse(Buffer.from(file.content, 'base64').toString('utf8')));
      notes.push(`Previous YDB commit: [\`${previous.grammarRevision}\`](https://github.com/${upstream}/commit/${previous.grammarRevision}).`, '');
      const before = previous.grammarRevision === current.grammarRevision && previous.grammarPath === current.grammarPath
        ? source : await getSource(previous);
      const diff = grammarDiff(previous, current, before, source);
      if (diff) {
        writeFileSync(diffPath, diff);
        notes.push(`[Download the complete grammar diff](${releaseUrl}/download/${encodeURIComponent(tag)}/grammar.diff).`, '');
        if (diff.length <= 12_000) {
          const fence = '`'.repeat(Math.max(3, ...Array.from(diff.matchAll(/`+/g), match => match[0].length)) + 1);
          notes.push('<details>', '<summary>Grammar diff</summary>', '', `${fence}diff`, diff.trimEnd(), fence, '', '</details>', '');
        }
      } else {
        notes.push('The grammar file is byte-for-byte unchanged from the previous release.', '');
      }
      const history = await grammarHistory(previous, current, getJson);
      notes.push('## YDB commits touching the grammar', '');
      if (history.notice) {
        notes.push(escapeMarkdown(history.notice));
      } else if (history.commits.length) {
        for (const commit of history.commits.slice(0, 50)) {
          const subject = escapeMarkdown(commit.commit.message.split('\n')[0].slice(0, 300));
          notes.push(`- [\`${commit.sha.slice(0, 12)}\`](https://github.com/${upstream}/commit/${commit.sha}) ${subject}`);
        }
        if (history.commits.length > 50) notes.push('', `Showing 50 of ${history.commits.length} file commits.`);
      } else {
        notes.push('No new grammar-file commits.');
      }
      notes.push('', `[Browse the public file history](https://github.com/${upstream}/commits/${current.grammarRevision}/${current.grammarPath}).`,
        'Arcadia synchronization may preserve changes as ordinary commits; this list is not restricted to merge commits.');
    }
  }
  writeFileSync(join(outputDirectory, 'notes.md'), notes.join('\n') + '\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await createReleaseNotes({
    repository: process.env.GITHUB_REPOSITORY,
    tag: process.env.RELEASE_TAG,
    metadata: JSON.parse(readFileSync(metadataPath, 'utf8')),
  });
}
