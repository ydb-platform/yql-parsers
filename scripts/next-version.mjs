import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

// Compare numeric components, not tag dates or lexicographic order.
export function nextVersion(tags) {
  let latest = [0n, 0n, 0n];
  for (const tag of tags) {
    const match = /^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(tag);
    if (!match) continue;
    const version = match.slice(1).map(BigInt);
    const firstDifference = version.findIndex((part, i) => part !== latest[i]);
    if (firstDifference !== -1 && version[firstDifference] > latest[firstDifference]) {
      latest = version;
    }
  }
  return `${latest[0]}.${latest[1]}.${latest[2] + 1n}`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(nextVersion(execFileSync('git', ['tag', '--list'], {encoding: 'utf8'}).split('\n')));
}
