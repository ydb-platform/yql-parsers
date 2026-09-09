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
