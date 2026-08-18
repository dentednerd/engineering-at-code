---
title: Tokens Studio for Figma
description: A reference page about the Tokens Studio plugin for Figma.
---

[Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma) is a Figma plugin that lets you define, manage, and apply design tokens directly within Figma. It gives you reusable tokens for things like border radius, spacing units, and semantic color and typography styles, and lets you propagate changes to those tokens across your whole document (or its Styles) at once.

## What it does

- Define design tokens (color, spacing, border radius, typography, shadows, etc.) in JSON, including for Figma properties that have no native token/variable support.
- Create aliases so tokens can reference other tokens, keeping decisions consistent and easy to update.
- Apply tokens to layers as an alternative or complement to Figma Styles and Variables — think "Styles for everything."
- Manage multiple **token sets** and **themes**, so you can switch between brands, modes (light/dark), or platforms.
- Sync token JSON with an external source of truth via a sync provider, enabling version control and collaboration across design and code.
- Export tokens to Figma Styles/Variables, and import existing Figma Styles/Variables into tokens.
- Inspect and debug which tokens are applied to a given layer.

## Key concepts

- **Design token**: a reusable design decision (e.g. a color, spacing value, or font size) stored as a name/value pair, applied to Figma layers in place of hardcoded values.
- **Token set**: a group of related tokens, typically saved as a distinct JSON file/collection within the plugin, letting you organize tokens (e.g. by category, brand, or platform) and combine sets as needed.
- **Alias (reference)**: a token whose value points to another token rather than a raw value, so updating the source token cascades to everything that references it.
- **Theme**: a named combination of token sets (e.g. "Light," "Dark," "Brand A") that can be toggled to switch which token values are active across a file.
- **Styles vs. Variables**: Tokens Studio can apply tokens as traditional Figma Styles, as native Figma Variables, or both; it's a superset of what Figma's built-in Variables currently support (e.g. border radius, spacing).
- **Sync provider**: an external storage/version-control integration that keeps the token JSON as a portable source of truth outside the Figma file, enabling collaboration with code. At Code, our sync provider is Azure DevOps.

## Installation

1. Open the plugin's [Figma Community page](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma).
2. Select the ribbon icon to save the plugin to your Figma account.
3. Open it from within any Figma file via the Plugins menu (search "Tokens Studio").

> [Tokens Studio: Install the Tokens Studio Plugin for Figma](https://docs.tokens.studio/get-started/install-figma-plugin)

## Pricing

The plugin is free to use. A [Pro licence](https://docs.tokens.studio/get-started/pro-licence) unlocks advanced features (e.g. themes, modified colors, branch switching, non-local variables/styles).

## Further reading

- [Tokens Studio docs](https://docs.tokens.studio/)
- [Azure DevOps sync setup guide](https://docs.tokens.studio/token-storage/remote/sync-git-azure-devops)
- [Tokens Studio Community Slack](https://www.tokens.studio/slack)