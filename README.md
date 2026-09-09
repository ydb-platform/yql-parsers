# YQL ANTLR Parser Generator

This project generates YQL parsers for multiple languages using ANTLR4.
The [TypeScript npm package](./ts/antlr4ng/README.md) uses `antlr4ng` and is distributed through GitHub Releases.

---

## Makefile Targets

### General Targets

- **`all`**  
  Generates all languages parsers.  
  ```bash
  npm ci --prefix ts/antlr4ng
  make all
  ```

- **`build-image`**  
  Builds the Docker image required for parser generation.  
  ```bash
  make build-image
  ```
  _Optional:_ can be generated with prefered COMMIT_HASH from [YDB Repo](https://github.com/ydb-platform/ydb/blob/main/yql/essentials/sql/v1/SQLv1Antlr4.g.in):
  ```bash
  make build-image COMMIT_HASH=yourcommithashhere
  ```

- **`clean`**  
  Cleans all generated files for all languages  
  ```bash
  make clean
  ```

### Languages Parser Targets

Supported languages:
- go
- python
- .NET (C#)
- java
- JavaScript
- TypeScript (`ts` for `antlr4`, `ts-ng` for `antlr4ng`)

- **`{language}`**  
  Generates the YQL parser files for the language you choose.  
  ```bash
  make {language}
  ```

- **`clean_{language}`**  
  Removes all generated YQL parser files for a language you choose.  
  ```bash
  make clean_{language}
  ```


## Release workflow

Run the `publish` workflow on the default branch to generate parsers, increment
the patch version, and attach the npm `.tgz` and `SHA256SUMS` to a GitHub Release.
The optional `commit-hash` input selects a full 40-character YDB grammar commit;
`default` uses the revision already recorded in Makefile. Both choices publish a
release. The workflow does not publish to an npm registry and needs only the
repository's `GITHUB_TOKEN` with `contents: write`.

Versions are allocated from the highest stable `vMAJOR.MINOR.PATCH` (or unprefixed
`MAJOR.MINOR.PATCH`) Git tag: `v0.0.9` becomes `v0.0.10`. With no such tags, the first
release is `v0.0.1`. Prerelease and unrelated tags are ignored. The package version
matches the release tag without `v`.

Release runs are serialized. Regeneration, Go tests and installation tests of the
npm tarball must pass before the release commit and tag are pushed atomically.
A concurrent default-branch update rejects the push instead of overwriting work.
Repository rules must allow this workflow to push its release commit and tag.
If asset publication fails after the push, the tag remains reserved; a new run
allocates the next patch version rather than replacing an existing tag or asset.

The npm package includes built JavaScript, declarations, generated sources and
grammar provenance. Existing generated files for other runtimes remain checked in.
See the [package README](./ts/antlr4ng/README.md) for installation and local tests.

### Grammar release notes

Release notes identify the full **YDB commit SHA** and link to the upstream
`SQLv1Antlr4.g.in` used for generation. They describe grammar changes rather than
collecting pull requests from this generator repository.

The previous revision comes from `ts/antlr4ng/metadata.json` at the latest published
stable GitHub Release, so an unpublished tag left by a failed run is not a baseline.
Both original grammar files are downloaded at their recorded SHAs and compared
before preprocessing. Changed grammar is attached as the complete `grammar.diff`,
included in `SHA256SUMS`; small diffs also appear in a collapsible notes section.
Identical files, the first release and missing older metadata are reported explicitly.
Failure to download a required source stops publication.

For a forward YDB update, notes also list commits touching the grammar between the
two revisions. This includes ordinary commits imported from Arcadia, not just merges.
The [GitHub comparison API](https://docs.github.com/en/rest/commits/commits#compare-two-commits)
caps its file list at 300, so it is used only to check ancestry; the diff does not
depend on that list. File history is paginated up to 500 entries to find the previous
boundary; at most 50 matching commits are shown, with an explicit count and history
link. A missing boundary or API failure is labelled, without presenting a partial
list as complete. Rollbacks and divergent revisions still get an exact snapshot diff,
but no forward commit list.

Run the release-tooling tests with `node --test scripts/*.test.mjs`. The standalone
`node scripts/release-notes.mjs` command reads the generated metadata and writes
`release/notes.md` and, when changed, `release/grammar.diff`. It needs
`GITHUB_REPOSITORY`, `RELEASE_TAG` and optionally `GH_TOKEN` for GitHub API access;
it does not publish a release.

## Parser tests

```bash
go test ./tests/...
dotnet test tests/YqlParser.Tests.csproj --framework net6.0
dotnet test tests/YqlParser.Tests.csproj --framework net7.0
```

The C# project compiles the checked-in `dotnet/` sources and requires the .NET SDK
and runtimes for the selected targets. Tests check valid queries, syntax errors
and complete input consumption. Go tests also check SELECT nodes and literals
without depending on the grammar's intermediate tree structure.

Legacy ANTLR output is marked as generated in `.gitattributes`; its whitespace is
preserved and excluded from the release whitespace check. Handwritten files and
the normalized `antlr4ng` sources remain checked.
