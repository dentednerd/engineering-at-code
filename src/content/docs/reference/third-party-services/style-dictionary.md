---
title: Style Dictionary
description: A reference page about Style Dictionary.
---

[Style Dictionary](https://styledictionary.com/) is a build system for design tokens. It runs in Node.js and natively in browsers, taking design tokens defined once (typically as JSON) and transforming/exporting them to any platform or language you need — iOS, Android, CSS, JS, HTML, Sketch files, style documentation, or anything else. Style Dictionary gives you a single source of truth for design tokens, then automatically generates correct, up-to-date style definitions for every platform from that one source. It's forward-compatible with the W3C Design Tokens Community Group (DTCG) spec. Style Dictionary was originally created by Danny Banks at Amazon and is now maintained as an open-source project on GitHub.

## Key concepts

- **Design tokens**: atomic, named design decisions (a name, a value, optional metadata) that can reference (alias) other tokens.
- **Transforms / Transform Groups**: convert token values for a target platform; grouped bundles (e.g. `css`, `scss`, `ios`) apply a sensible default set of transforms.
- **Formats**: control the structure/syntax of generated output files.
- **Filters**: narrow which tokens go into a given output file.
- **Parsers / Preprocessors**: customize how source token files are read and transformed before build.
- **Actions**: run custom logic as part of the build (e.g. copying assets, generating extra files).

## How it works

1. **Define tokens** as JSON (or other supported formats), organized however you like across multiple files; Style Dictionary deep-merges them.
2. **Configure platforms** in a config file (`config.json` or JS/TS config), each with a `transformGroup`, `buildPath`, and output `files`.
3. **Transform**: built-in and custom transforms convert token values into platform-appropriate formats (e.g. hex to `UIColor`, px to `sp`).
4. **Format**: built-in and custom formats determine the output file structure (CSS custom properties, Android XML, Swift/Kotlin objects, etc.).
5. **Build**: running the CLI or Node API resolves references between tokens and writes the generated files for every configured platform.

## Installation

Requires Node.js.

```bash
# Install globally for CLI use
npm install -g style-dictionary

# Or as a dev dependency
npm install -D style-dictionary
```

## How we use Style Dictionary

When we run `npm run build:tokens` in a project, Style Dictionary converts the design tokens from JSON into CSS custom properties.

See: [Guides > Style Dictionary](/guides/style-dictionary/style-dictionary)

## Further reading

- [Tokens Studio: Style Dictionary + SD Transforms](https://docs.tokens.studio/transform-tokens/style-dictionary)
- [Style Dictionary Configurator](https://configurator.tokens.studio/): a web-based tool for experimenting with Style Dictionary transforms in the browser without installing anything locally.
