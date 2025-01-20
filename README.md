# YQL ANTLR Parser Generator

This project provides different languages code generation of YQL parser using ANTLR4.

---

## Makefile Targets

### General Targets

- **`all`**  
  Generates all languages parsers.  
  ```bash
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
- TypeScript

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
