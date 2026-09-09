import assert from 'node:assert/strict';
import {test} from 'node:test';
import {nextVersion} from './next-version.mjs';

test('first release starts at 0.0.1', () => {
  assert.equal(nextVersion([]), '0.0.1');
});

test('increments only the patch component of the highest stable version', () => {
  assert.equal(nextVersion(['v0.0.9', 'v0.0.2']), '0.0.10');
  assert.equal(nextVersion(['v1.9.99', 'v1.10.9', 'v1.10.10', 'v0.99.99']), '1.10.11');
  assert.equal(nextVersion(['v2.0.0', 'v1.99.99']), '2.0.1');
});

test('accepts unprefixed versions, ignores prereleases and unrelated tags', () => {
  assert.equal(nextVersion(['2.3.4', 'v9.0.0-rc.1', 'v3.0.0+build', 'snapshot', 'v02.3.4']), '2.3.5');
});
